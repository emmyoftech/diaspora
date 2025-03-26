import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, inject, Input, input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-input-text-field-decorator',
  imports: [IconComponent],
  template: `
    
    @if(placeHolder){
      <div class="placeholder" [class]="placeHolderState" >{{placeHolder}}</div>
    }    
    
    <ng-content></ng-content>

    @if(inputType == 'password'){

      @if(switchType == 'password'){
        <app-icon (click)="toggleEyeIcon()" class="icon" name="eye"></app-icon>
      }@else {
        <app-icon (click)="toggleEyeIcon()" class="icon" name="eye-slash"></app-icon>
      }

    }
  `,
  styleUrl: './input-text-field-decorator.component.scss'
})
export class InputTextFieldDecoratorComponent implements AfterContentInit, DoCheck, OnChanges {
  @Input()
  error?: any

  @ContentChild('textField', {read: ElementRef})
  private textFieldRef!: ElementRef<HTMLInputElement>

  private render = inject(Renderer2)

  private componentElement = inject(ElementRef).nativeElement

  inputType?: string

  switchType?: string

  placeHolder?: string

  placeHolderState?: "onFocus"

  ngOnChanges(changes: SimpleChanges): void {
    if(this.error){
      this.render.addClass(this.componentElement, "err")
    }else{
      this.render.removeClass(this.componentElement, "err")
    }
  }

  ngDoCheck(): void {
    if(!this.textFieldRef) return

    const {nativeElement} = this.textFieldRef

    if(nativeElement.value && this.placeHolderState != "onFocus")
    this.raisePlaceHolder()
  }

  ngAfterContentInit(): void {
    if(!this.textFieldRef) throw Error("Textfield cannot be found")

    const {nativeElement} = this.textFieldRef

    this.placeHolder = nativeElement.placeholder

    nativeElement.placeholder = ""

    this.inputType = nativeElement.type

    if(this.inputType == "password"){
      this.switchType = this.inputType
    }

    this.render.listen(nativeElement, "focus", ev => this.onFocus(ev))

    this.render.listen(nativeElement, "blur", ev => this.onBlur(ev))

    this.setStyle(nativeElement)
  }

  toggleEyeIcon(){
    this.switchType = this.switchType == "password" ? "text" : "password"

    if(!this.textFieldRef) throw Error("Textfield cannot be found")

    const {nativeElement} = this.textFieldRef

    nativeElement.type = this.switchType
  }

  private onFocus(ev: Event){
    this.raisePlaceHolder()
  }

  private onBlur(ev: Event) {
    const {value} = (ev.target as HTMLInputElement)
    
    if(!value) this.dropPlaceHolder()
  }

  private raisePlaceHolder(){
    this.placeHolderState = "onFocus"
  }

  private dropPlaceHolder(){
    this.placeHolderState = undefined
  }

  private setStyle(inputElement: HTMLElement){
    this.render.setStyle(inputElement, "flex", "1")

    this.render.setStyle(inputElement, "border-radius", "inherit")

    this.render.setStyle(inputElement, "border", "none")

    this.render.setStyle(inputElement, "outline", "none")
  }
}