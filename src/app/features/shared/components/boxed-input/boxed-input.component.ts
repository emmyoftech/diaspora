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
          (keydown)="onKeyDown($event, $index)"
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

    if(this.valueEmitted) return
    
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

  private valueEmitted = false

  private get inputElementArray () {
    return this.inputElementRefs.map(ref => ref.nativeElement)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inputArrays = new Array(this.inputCount ?? 4).fill(null)
  }

  ngDoCheck(): void {
    this.size = this.size ?? 30
  }

  ngAfterViewInit(): void {}

  onInput(ev: Event, index: number){
    try {
      const nextElementindex = index + 1,

      {value} = ev.target as HTMLInputElement

      if(value == "" || !value) return

      this.value += value

      this.setFocus(this.inputElementArray[nextElementindex])

    } catch {
      this.blurAll()

      this.boxedResultEmmitter.emit(this.value)

      this.valueEmitted = true
    }
  }

  onKeyDown (ev: Event, index: number){
    const {key} = ev as KeyboardEvent

    if(key.toLowerCase() == "backspace") {

      try {
        this.setFocus(this.inputElementArray[index -1])
        
        this.value = this.value.slice(0, index - 1)
      } catch {

        this.value = ""
      } 
    }
  }

  reset(){
    this.inputElementRefs.forEach(ref => {
      ref.nativeElement.value = ""

      this.setFocus(this.inputElementRefs.first.nativeElement)
    })
    this.value = ""

    this.valueEmitted = false
  }

  private blurAll(){
    this.inputElementRefs.forEach(ref => ref.nativeElement.blur())
  }

  private setFocus(inputField: HTMLInputElement) {
    inputField.focus()
  }
}
