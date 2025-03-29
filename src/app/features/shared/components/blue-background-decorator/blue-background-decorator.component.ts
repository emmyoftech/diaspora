import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue-background-decorator',
  imports: [
    CommonModule
  ],
  template: `
    <div [ngStyle]="{
      width: (white_per_size ?? 100) + '%',
      height: (white_per_size ?? 100) + '%'
    }"></div>
  `,
  styleUrl: './blue-background-decorator.component.scss'
})
export class BlueBackgroundDecoratorComponent {
  @Input()
  white_per_size?: number
}
