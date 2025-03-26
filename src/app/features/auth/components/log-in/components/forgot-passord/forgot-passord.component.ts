import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { LoginCredentials } from 'src/app/api-integration/endpoint-services/auth/auth-api-types.type';
import { InputTextFieldDecoratorComponent } from "../../../../../shared/components/input-text-field-decorator/input-text-field-decorator.component";
import { FormsModule } from '@angular/forms';
import CarouselSlideFeature from 'src/app/features/shared/interfaces/carousel-slide-feature.inter';
import { CommonModule } from '@angular/common';
import { EmailFormatValidatorDirective } from 'src/app/features/shared/validators/email-format-validator.directive';
import { ButtonLoadersComponent } from "../../../../../shared/components/button-loaders/button-loaders.component";
import { Observable, tap } from 'rxjs';
import { AuthApiCallService } from 'src/app/api-integration/endpoint-services/auth/auth-api-call.service';
import { SlideMessageComponent } from "../../../shared/slide-message/slide-message.component";

@Component({
  selector: 'app-forgot-passord',
  imports: [
    CommonModule,
    FormsModule,
    InputTextFieldDecoratorComponent,
    EmailFormatValidatorDirective,
    ButtonLoadersComponent,
    SlideMessageComponent
],
  templateUrl: './forgot-passord.component.html',
  styleUrl: './forgot-passord.component.scss'
})
export class ForgotPassordComponent implements CarouselSlideFeature {
  @Input()
  credentials!: LoginCredentials

  @Output("toSignIn")
  private switchToSignInEmitter: EventEmitter<void> = new EventEmitter()

  @Output("toOtp")
  private switchToOTPEmitter: EventEmitter<void> = new EventEmitter()

  private Auth_Api_Call = inject(AuthApiCallService) 

  loadObvs?: Observable<any>

  error_message = ""

  onVisible() {
  }

  toSignIn(){
    this.switchToSignInEmitter.emit()
  }

  toOtp(){
    this.loadObvs = this.Auth_Api_Call.verify_email(this.credentials.email)
    .pipe(tap({
      next: res => {
    
        if(res) this.switchToOTPEmitter.emit()
        
        else {
          this.error_message = `failed to verify email: ${this.credentials.email}`

          //TODO: Make sure to remove when api is okay
          setTimeout(() => {
            this.switchToOTPEmitter.emit()
          }, 2000);
        }
      }
    }))
  }
}
