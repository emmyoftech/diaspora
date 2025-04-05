import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { OurServicesComponent } from './features/our-services/our-services.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { BookAConsultationComponent } from './features/book-a-consultation/book-a-consultation.component';
import { CookiesPolicyComponent } from './features/cookies-policy/cookies-policy.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';
import { TermsAndConditionComponent } from './features/terms-and-condition/terms-and-condition.component';
import { PreviousProjectsComponent } from './features/previous-projects/previous-projects.component';

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
    loadChildren: () => import("./features/property-listings/property-liatings.module").then(m => m.PropertyLiatingsModule)
  },

  {
    path: 'projects',
    loadChildren: () => import("./features/previous-projects/previous-projects.module").then(m => m.PreviousProjectsModule)

  },

  {
    path: 'book-a-consultation',
    component: BookAConsultationComponent
  },

  {
    path: 'cookie-policy',
    component: CookiesPolicyComponent
  },

  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },

  {
    path: 'terms',
    component: TermsAndConditionComponent
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
