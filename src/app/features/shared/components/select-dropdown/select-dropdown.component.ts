import { Component, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { SelectDropObj } from './select-dropdown.types';
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-dropdown',
  imports: [
    CommonModule,
    IconComponent
  ],
  template: `

    @if(firstELement?.icon?.name){
      <app-icon class="icon" [name]="firstELement?.icon?.name"></app-icon>
    }

    <p>{{firstELement?.text}}</p>

    <app-icon (click)="toggle($event)" class="toggle-icon" name="chevron-down"></app-icon>

    <ul class="drop-box" [ngClass]="{active: dropped}">
      @for (item of drops; track $index) {
        <li (click)="select($event, item)">
          @if(item.icon?.name){
            <app-icon [name]="item.icon?.name"></app-icon>
          }

          <p>{{item.text}}</p>
        </li>
      }
    </ul>
  `,
  styleUrl: './select-dropdown.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class SelectDropdownComponent implements OnInit {
  @Input()
  drops?: SelectDropObj []

  get firstELement () {
    return this.drops?.at(0)
  }

  dropped = false

  ngOnInit(): void {
    document.body.addEventListener("click", () => this.dropped = false)
  }

  toggle(ev: Event){
    ev.stopPropagation()
    
    this.dropped = !this.dropped
  }

  select(ev: Event, drop: SelectDropObj){
    ev.stopPropagation()

    this.dropped = false
  }
}
