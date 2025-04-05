import { Component } from '@angular/core';
import { NavigatorComponent } from "../../../shared/components/navigator/navigator.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { projectProducer } from 'src/app/functions/dev-funcs/projects-data-producer.func';
import { ImageHandlerComponent } from "../../../shared/components/image-handler/image-handler.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TextShortnerPipe } from 'src/app/features/shared/pipes/text-shortner.pipe';
import { CommonModule } from '@angular/common';
import { MiniProjectViewComponent } from "../../../shared/components/mini-project-view/mini-project-view.component";

@Component({
  selector: 'app-property-listings-specific-property',
  imports: [
    NavigatorComponent,
    FooterComponent,
    ImageHandlerComponent,
    IconComponent,
    TextShortnerPipe,
    CommonModule,
    MiniProjectViewComponent
],
  templateUrl: './property-listings-specific-property.component.html',
  styleUrl: './property-listings-specific-property.component.scss'
})
export class PropertyListingsSpecificPropertyComponent {
  get Project () {
    return this.projects[0]
  }

  projects = projectProducer(3)

  viewLongDeescription = false

  maxTextLength = 1000
}
