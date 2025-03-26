import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  template: `
    <i [class]="IconClass" ></i>
  `,
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input('name')
  iconName?: string

  @Input("type")
  iconType?: string
  
  get IconClass () {
    return `fa-${this.iconName} fa-${this.iconType ?? "solid"}`
  }
}
