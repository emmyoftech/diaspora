import { Component, inject } from '@angular/core';
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { FormsModule } from '@angular/forms';
import { EmailFormatValidatorDirective } from 'src/app/features/shared/validators/email-format-validator.directive';
import { CommonModule } from '@angular/common';
import { ButtonLoadersComponent } from "../../../shared/components/button-loaders/button-loaders.component";
import { ContactUsMessage } from 'src/app/api-integration/endpoint-services/website/website-api-types.type';
import { Observable, tap } from 'rxjs';
import { WebsiteApiCallService } from 'src/app/api-integration/endpoint-services/website/website-api-call.service';

@Component({
  selector: 'app-contact-us-reach-out-form',
  imports: [
    FormsModule,
    IconComponent,
    CommonModule,
    EmailFormatValidatorDirective,
    ButtonLoadersComponent
],
  templateUrl: './contact-us-reach-out-form.component.html',
  styleUrl: './contact-us-reach-out-form.component.scss'
})
export class ContactUsReachOutFormComponent {

  private website_api_call = inject(WebsiteApiCallService)

  loadObvs?: Observable<any>

  message: ContactUsMessage = {
    name: "",
    email: "",
    message: ""
  }

  submit(){
    this.loadObvs = this.website_api_call.contact_us(this.message)
    .pipe(tap(
      res => {
        this.reset()
      }
    ))
  }

  private reset() {
    this.message = {
      name: "",
      email: "",
      message: ""
    }
  }
}
