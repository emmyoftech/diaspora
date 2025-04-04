import { Component } from '@angular/core';
import { NavigatorComponent } from "../shared/components/navigator/navigator.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { ContactUsFAQsComponent } from "./components/contact-us-faqs/contact-us-faqs.component";
import { ContactUsReachOutFormComponent } from "./components/contact-us-reach-out-form/contact-us-reach-out-form.component";

@Component({
  selector: 'app-contact-us',
  imports: [NavigatorComponent, FooterComponent, ContactUsFAQsComponent, ContactUsReachOutFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
