import { Component } from '@angular/core';
import { NavigatorComponent } from "../shared/components/navigator/navigator.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { SubcribeComponent } from "../shared/components/subcribe/subcribe.component";
import { OurServicesServicesViewComponent } from "./coomponents/our-services-services-view/our-services-services-view.component";
import { OurServicesWhyChooseUsComponent } from "./coomponents/our-services-why-choose-us/our-services-why-choose-us.component";
import { WhatClientsAreSayingComponent } from "../shared/components/what-clients-are-saying/what-clients-are-saying.component";
import { OurServicesTalkToAPropertyManagerComponent } from "./coomponents/our-services-talk-to-a-property-manager/our-services-talk-to-a-property-manager.component";

@Component({
  selector: 'app-our-services',
  imports: [NavigatorComponent, FooterComponent, SubcribeComponent, OurServicesServicesViewComponent, OurServicesWhyChooseUsComponent, WhatClientsAreSayingComponent, OurServicesTalkToAPropertyManagerComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {

}
