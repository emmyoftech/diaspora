import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { OurServicesComponent } from './features/our-services/our-services.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
