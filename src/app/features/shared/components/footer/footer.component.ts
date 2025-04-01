import { Component } from '@angular/core';
import { ImageHandlerComponent } from "../image-handler/image-handler.component";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-footer',
  imports: [ImageHandlerComponent, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
