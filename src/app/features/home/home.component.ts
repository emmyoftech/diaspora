import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigatorComponent } from "../shared/components/navigator/navigator.component";
import { BlueBackgroundDecoratorComponent } from "../shared/components/blue-background-decorator/blue-background-decorator.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { PropertySearchComponent } from '../shared/components/property-search/property-search.component';
import gsap from 'gsap';
import { KeyServicesComponent } from "./components/key-services/key-services.component";
import { WhatWeOfferComponent } from "./components/what-we-offer/what-we-offer.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { PreviousProjectsComponent } from "./components/previous-projects/previous-projects.component";
import { WhatClientsAreSayingComponent } from "../shared/components/what-clients-are-saying/what-clients-are-saying.component";
import { SubcribeComponent } from "../shared/components/subcribe/subcribe.component";
import { FooterComponent } from "../shared/components/footer/footer.component";

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
    WhatClientsAreSayingComponent,
    SubcribeComponent,
    FooterComponent,
    BlueBackgroundDecoratorComponent
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
