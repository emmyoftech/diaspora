import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListingsComponent } from './property-listings.component';
import { PropertyListingsSpecificPropertyComponent } from './routes/property-listings-specific-property/property-listings-specific-property.component';
import { PropertyListingsDefaultComponent } from './routes/property-listings-default/property-listings-default.component';

const routes: Routes = [
  {
    path: "",
    component: PropertyListingsComponent,
    children: [
      {
        path: '',
        component: PropertyListingsDefaultComponent
      },
      {
        path: ":propertyId",
        component: PropertyListingsSpecificPropertyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyLiatingsRoutingModule { }
