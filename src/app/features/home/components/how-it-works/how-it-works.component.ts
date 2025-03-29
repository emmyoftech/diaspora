import { Component } from '@angular/core';
import { ImageHandlerComponent } from "../../../shared/components/image-handler/image-handler.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";

@Component({
  selector: 'app-how-it-works',
  imports: [ImageHandlerComponent, IconComponent],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {

}
