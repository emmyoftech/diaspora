import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-handler',
  standalone: true,
  template: `
    <img [src]="src">
  `,
  styles: [`
      :host{
        overflow: hidden;
        
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
  `]
})
export class ImageHandlerComponent {
  @Input()
  src?: string
}
