import { Component } from '@angular/core';
import { NavigatorComponent } from "../shared/components/navigator/navigator.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { PropertySearchComponent } from "../shared/components/property-search/property-search.component";
import { projectProducer } from 'src/app/functions/dev-funcs/projects-data-producer.func';
import { MiniProjectViewComponent } from "../shared/components/mini-project-view/mini-project-view.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-listings',
  imports: [
    NavigatorComponent,
    FooterComponent,
    PropertySearchComponent,
    MiniProjectViewComponent,
    RouterModule
],
  templateUrl: './property-listings.component.html',
  styleUrl: './property-listings.component.scss'
})
export class PropertyListingsComponent {
  properties = projectProducer(9)
}
