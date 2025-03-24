import { AfterContentInit, Component, ContentChild, ElementRef, inject, Input, input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-input-text-field-decorator',
  imports: [],
  template: `
    <div class="placeholder"></div>
    
    <ng-content></ng-content>
  `,
  styleUrl: './input-text-field-decorator.component.scss'
})
export class InputTextFieldDecoratorComponent implements AfterContentInit {
  @Input()
  width?: number

  @Input()
  height?: number

  @ContentChild('textField', {read: ElementRef})
  private textFieldRef!: ElementRef<HTMLInputElement>

  private render = inject(Renderer2)

  private componentElement = inject(ElementRef).nativeElement

  ngAfterContentInit(): void {
    if(!this.textFieldRef) throw Error("Textfield cannot be found")

    const {nativeElement} = this.textFieldRef

    this.render.listen(nativeElement, "focus", ev => this.onFocus(ev))

    this.render.listen(nativeElement, "blur", ev => this.onBlur(ev))

    this.setStyle(nativeElement)
  }

  private onFocus(ev: Event){}

  private onBlur(ev: Event) {}

  private setStyle(inputElement: HTMLElement){
    this.render.setStyle(inputElement, "width", (this.width ?? 100) + "px")

    this.render.setStyle(inputElement, "height", (this.height ?? 50) + "px")

    this.render.setStyle(inputElement, "border", "solid 1px")

    this.render.setStyle(inputElement, "outline", "none")
  }
}