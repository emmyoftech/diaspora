import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigatorComponent } from "../shared/components/navigator/navigator.component";
import { BlueBackgroundDecoratorComponent } from "../shared/components/blue-background-decorator/blue-background-decorator.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { PropertySearchComponent } from './components/property-search/property-search.component';
import gsap from 'gsap';
import { KeyServicesComponent } from "./components/key-services/key-services.component";
import { WhatWeOfferComponent } from "./components/what-we-offer/what-we-offer.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { PreviousProjectsComponent } from "./components/previous-projects/previous-projects.component";
import { WhatClientsAreSayingComponent } from "./components/what-clients-are-saying/what-clients-are-saying.component";

@Component({
  selector: 'app-home',
  imports: [
    NavigatorComponent,
    HeroSectionComponent,
    PropertySearchComponent,
    KeyServicesComponent,
    WhatWeOfferComponent,
    HowItWorksComponent,
    PreviousProjectsComponent,
    WhatClientsAreSayingComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(PropertySearchComponent, {read: ElementRef})
  vv!: ElementRef<HTMLElement>
  
  ngAfterViewInit(): void {

  }
}
