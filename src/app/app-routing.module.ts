import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { OurServicesComponent } from './features/our-services/our-services.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { PropertyListingsComponent } from './features/property-listings/property-listings.component';
import { PropertyListingsSpecificPropertyComponent } from './features/property-listings/components/property-listings-specific-property/property-listings-specific-property.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "auth",
    component: AuthComponent
  },

  {
    path: "about",
    component: AboutUsComponent
  },

  {
    path: "services",
    component: OurServicesComponent
  },

  {
    path: "contact",
    component: ContactUsComponent
  },

  {
    path: "property-list",
    component: PropertyListingsComponent
  },

  {
    path: "property-list/:propertyId",
    component: PropertyListingsSpecificPropertyComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
