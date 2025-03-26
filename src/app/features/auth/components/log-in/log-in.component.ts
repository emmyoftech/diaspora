import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { NGXCarouselComponent } from "../../../shared/components/ngx-carousel/ngx-carousel.component";
import { ImageHandlerComponent } from "../../../shared/components/image-handler/image-handler.component";
import { InputTextFieldDecoratorComponent } from "../../../shared/components/input-text-field-decorator/input-text-field-decorator.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailFormatValidatorDirective } from 'src/app/features/shared/validators/email-format-validator.directive';
import { ButtonLoadersComponent } from "../../../shared/components/button-loaders/button-loaders.component";
import { Observable, tap } from 'rxjs';
import { LoginCredentials } from 'src/app/api-integration/endpoint-services/auth/auth-api-types.type';
import { AuthApiCallService } from 'src/app/api-integration/endpoint-services/auth/auth-api-call.service';
import { Router } from '@angular/router';
import { SlideMessageComponent } from 'src/app/features/auth/components/shared/slide-message/slide-message.component';
import { ForgotPassordComponent } from './components/forgot-passord/forgot-passord.component';
import { LoginOTPVerificationComponent } from './components/forgot-passord/login-otp-verification/login-otp-verification.component';

@Component({
  selector: 'app-log-in',
  imports: [
    CommonModule,
    FormsModule,
    NGXCarouselComponent,
    ImageHandlerComponent,
    InputTextFieldDecoratorComponent,
    ForgotPassordComponent,
    LoginOTPVerificationComponent,
    SlideMessageComponent,
    EmailFormatValidatorDirective,
    ButtonLoadersComponent
],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  @Output("switch")
  private switchEmitter: EventEmitter<void> = new EventEmitter()

  @ViewChild(NGXCarouselComponent)
  carousel?: NGXCarouselComponent

  private AuthApiCall = inject(AuthApiCallService)

  private router = inject(Router)

  loadObvs?: Observable<any>
 
  creds: LoginCredentials = {
    email: "",
    password: ""
  }

  error_message = ""

  login(){
    this.loadObvs = this.AuthApiCall.login_user(this.creds)
    .pipe(tap(
      {
        next: res => {
          if(res) {
            this.router.navigateByUrl("/")
          }else{
            this.error_message = "failed to sign in, try again later"
          }
        }
      }
    ))
  }

  toStart(){
    this.carousel?.ngx_carousel.slickGoTo(0)
  }

  toSignUp(){
    this.switchEmitter.emit()
  }

  toOTP(){
    this.carousel?.ngx_carousel.slickGoTo(2)
  }

  toForgotPassword(){
    this.carousel?.ngx_carousel.slickGoTo(1)
  }
}