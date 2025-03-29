import { Component } from '@angular/core';
import { ImageHandlerComponent } from "../../../shared/components/image-handler/image-handler.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";

@Component({
  selector: 'app-what-we-offer',
  imports: [ImageHandlerComponent, IconComponent],
  templateUrl: './what-we-offer.component.html',
  styleUrl: './what-we-offer.component.scss'
})
export class WhatWeOfferComponent {

}
