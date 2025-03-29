import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-handler',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <img [src]="src" [ngStyle]="{objectFit: fit ?? 'cover'}">
  `,
  styles: [`
      :host{
        border: none;
        outline: none;
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

  @Input()
  fit?: "contain" | "cover"
}
