import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/features/shared/components/footer/footer.component';
import { MiniProjectViewComponent } from 'src/app/features/shared/components/mini-project-view/mini-project-view.component';
import { NavigatorComponent } from 'src/app/features/shared/components/navigator/navigator.component';
import { PropertySearchComponent } from 'src/app/features/shared/components/property-search/property-search.component';
import { projectProducer } from 'src/app/functions/dev-funcs/projects-data-producer.func';

@Component({
  selector: 'app-property-listings-default',
  imports: [
    NavigatorComponent,
    FooterComponent,
    PropertySearchComponent,
    MiniProjectViewComponent,
    RouterModule
  ],
  templateUrl: './property-listings-default.component.html',
  styleUrl: './property-listings-default.component.scss'
})
export class PropertyListingsDefaultComponent {

  properties = projectProducer(9)

}
