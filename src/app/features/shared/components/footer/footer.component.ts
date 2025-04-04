import { Component } from '@angular/core';
import { ImageHandlerComponent } from "../image-handler/image-handler.component";
import { IconComponent } from "../icon/icon.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterModule,
    ImageHandlerComponent, 
    IconComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
