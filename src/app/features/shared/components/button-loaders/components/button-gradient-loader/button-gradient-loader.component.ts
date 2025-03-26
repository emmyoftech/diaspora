import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-gradient-loader',
  imports: [],
  template: `
    <p>{{loadMessage}}</p>  
  `,
  styleUrl: './button-gradient-loader.component.scss'
})
export class ButtonGradientLoaderComponent {
  @Input("loadMessage")
  loadMessage?: string
}
