import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-boxed-input',
  imports: [
    CommonModule
  ],
  template: `
    @for (item of inputArrays; track $index) {
      <div>

        <input 
          [ngStyle]="{
            width: size + 'px',
            height: size + 'px',
            fontSize: (size - 5) + 'px',
            paddingLeft: '10px'
          }" 
          [type]="inputType ?? 'number'" 
          (input)="onInput($event, $index)"
          (keyup)="onKeyUp($event, $index)"
          #input
        >
      </div>
    }
  `,
  styleUrl: './boxed-input.component.scss'
})
export class BoxedInputComponent implements OnChanges, DoCheck, AfterViewInit {
  @Input()
  inputCount?: number

  @Input()
  inputType?: "text" | "number"

  @Input()
  size!: number

  @ViewChildren('input')
  inputElementRefs!: QueryList<ElementRef<HTMLInputElement>>

  @Output("result")
  private boxedResultEmmitter: EventEmitter<string> = new EventEmitter()

  @HostListener("click")
  private click(){
    
    for (let i = 0; i < this.inputElementRefs.length; i++) {
      const ref = this.inputElementRefs.get(i);
      
      if(!ref) continue

      const {value} = ref.nativeElement

      if(!value) {
        this.setFocus(ref.nativeElement)
        
        return
      }
    }

    this.setFocus(this.inputElementRefs.last.nativeElement)

  }

  inputArrays: any[] = []

  private value = ""

  ngOnChanges(changes: SimpleChanges): void {
    this.inputArrays = new Array(this.inputCount ?? 4).fill(null)
  }

  ngDoCheck(): void {
    this.size = this.size ?? 30
  }

  ngAfterViewInit(): void {
    this.setFocus(this.inputElementRefs.first.nativeElement)
  }

  onInput(ev: Event, index: number){
    try {
      this.value += (ev.target as HTMLInputElement).value

      const nextField = this.inputElementRefs.get(index + 1)

      if(!nextField) throw Error()

      this.setFocus(nextField.nativeElement)
    } catch {
      this.boxedResultEmmitter.next(this.value)

      this.blurAll()
    }
  }

  onKeyUp(ev: KeyboardEvent, index: number){
    try {
      const {key} = ev,

      {value} = ev.target as HTMLInputElement,

      previousInputField = this.inputElementRefs.get(index - 1)

      if(key.toLowerCase() != "backspace") return
  
      if(value || !previousInputField) return

      this.setFocus(previousInputField.nativeElement)

    } catch{}
  }

  reset(){
    this.inputElementRefs.forEach(ref => {
      ref.nativeElement.value = ""

      this.setFocus(this.inputElementRefs.first.nativeElement)
    })
    this.value = ""
  }

  private blurAll(){
    this.inputElementRefs.forEach(ref => ref.nativeElement.blur())
  }

  private setFocus(inputField: HTMLInputElement) {
    inputField.focus()
  }
}
