import { Component, inject, Inject } from '@angular/core';
import { ImageHandlerComponent } from "../image-handler/image-handler.component";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from "../icon/icon.component";
import { FEATURES_NAVIGATOR_ROUTE_MAP } from '../../configurations/features-navigation-route-map.config';
import { NavigationObject } from '../../types/navigation-object.type';

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
      provide: FEATURES_NAVIGATOR_ROUTE_MAP.token,
      useValue: FEATURES_NAVIGATOR_ROUTE_MAP.data
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
            <li [routerLink]="'/' + item.routeKey" [ngClass]="{active: ifActive(item)}">
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

  private router = inject(Router)

  constructor(
    @Inject(FEATURES_NAVIGATOR_ROUTE_MAP.token) public navs: NavigationObject[]
  ){}

  sidebarActive = false

  ifActive(navObj: NavigationObject){
    let result = false

    const currentPaths = this.router.url.split("/").map(url => url.toLowerCase())

    /**
     * If its home route map key
     */
    if(navObj.routeKey == "--"){
      
      /**
       * checks if current route string lenght is less than zero, meaning we are at the base route
       */
      result = currentPaths.join("").length < 1

    }else{
      result = currentPaths.includes(navObj.routeKey)
    }

    return result
  }

  openSideNavBar(){
    this.sidebarActive = true
  }

  closeSideNavBar(){
    this.sidebarActive = false
  }
}
