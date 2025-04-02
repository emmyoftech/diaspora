import { Component, inject, Inject } from '@angular/core';
import { ImageHandlerComponent } from "../image-handler/image-handler.component";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavigationObject, NAVIGATOR_ROUTE_MAP } from './config/navigator-route-map.config';
import { CommonModule } from '@angular/common';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-navigator',
  imports: [
    CommonModule,
    RouterModule,
    ImageHandlerComponent,
    RouterModule,
    IconComponent
],
  providers: [
    {
      provide: NAVIGATOR_ROUTE_MAP.token,
      useValue: NAVIGATOR_ROUTE_MAP.data
    }
  ],
  template: `
    <app-image-handler
      src="assets/images/logo.png" 
      fit="contain"
      routerLink="/"
    >
    </app-image-handler>

    <ul>
        @for (item of navs; track $index) {
          
          @if(item.routeKey == '--'){

            <li routerLink="/" [ngClass]="{active: ifActive(item)}">
              <p>{{item.routeName}}</p>
            </li>

          }@else {
            <li [routerLink]=" '/' + item.routeKey" [ngClass]="{active: ifActive(item)}">
              <p>{{item.routeName}}</p>
            </li>
          }
        }
    </ul>

    <div>
      <button routerLink="auth">Login</button>
      <button routerLink="auth">Sign up</button>
    </div>

    <app-icon name="bars" (click)="openSideNavBar()"></app-icon>

    <aside [ngStyle]="{
        left: (sidebarActive ? 0 : -100) + '%'
      }"
    >
      <header>
        <app-image-handler
          src="assets/images/logo.png" 
          fit="contain"
          routerLink="/"
        >
        </app-image-handler>

        <app-icon name="close" (click)="closeSideNavBar()"></app-icon>
      </header>

      <ul>
        @for (item of navs; track $index) {
          
          @if(item.routeKey == '--'){

            <li routerLink="/" [ngClass]="{active: ifActive(item)}">
              <p>{{item.routeName}}</p>

              <span></span>
            </li>

          }@else {
            <li [routerLink]="item.routeKey" [ngClass]="{active: ifActive(item)}">
              <p>{{item.routeName}}</p>
              <span></span>
            </li>
          }
        }
      </ul>

      <div>
        <button routerLink="auth">Login</button>
        <button routerLink="auth">Sign up</button>
      </div>
    </aside>
  `,
  styleUrl: './navigator.component.scss'
})
export class NavigatorComponent {

  private active_route = inject(ActivatedRoute)

  constructor(
    @Inject(NAVIGATOR_ROUTE_MAP.token) public navs: NavigationObject[]
  ){}

  sidebarActive = false

  ifActive(navObj: NavigationObject){
    let result = false

    const currentPath = this.active_route.snapshot.routeConfig?.path

    if(navObj.routeKey == "--"){
      return !currentPath 
    }

    result = currentPath == navObj.routeKey

    return result
  }

  openSideNavBar(){
    this.sidebarActive = true
  }

  closeSideNavBar(){
    this.sidebarActive = false
  }
}
