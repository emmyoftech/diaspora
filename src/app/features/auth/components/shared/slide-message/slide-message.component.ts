import { Component, ElementRef, inject, Input, OnChanges, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide-message',
  imports: [],
  template: `
    <p #message_glider>{{message}}</p>
  `,
  styleUrl: './slide-message.component.scss'
})
export class SlideMessageComponent implements OnChanges {
  @Input()
  message?: string

  @ViewChild("message_glider", {read: ElementRef, static: true})
  private message_glide_element_ref!: ElementRef<HTMLElement>

  private componentElement = inject(ElementRef).nativeElement

  private render = inject(Renderer2)

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.message) return    

    this.render.addClass(this.componentElement, "active")

    setTimeout(() => {
      this.render.removeClass(this.componentElement, "active")
    }, 5000);
  }
}
