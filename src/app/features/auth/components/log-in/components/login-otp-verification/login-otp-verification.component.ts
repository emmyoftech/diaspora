import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginCredentials } from 'src/app/api-integration/endpoint-services/auth/auth-api-types.type';
import { BoxedInputComponent } from "../../../../../shared/components/boxed-input/boxed-input.component";

@Component({
  selector: 'app-login-otp-verification',
  imports: [
    BoxedInputComponent
  ],
  templateUrl: './login-otp-verification.component.html',
  styleUrl: './login-otp-verification.component.scss'
})
export class LoginOTPVerificationComponent {
  @Input()
  credentials!: LoginCredentials

  @Output("toForgotPassword")
  private toForgotPasswordEmitter: EventEmitter<void> = new EventEmitter()

  @Output("toPasswordReset")
  private toPasswordResetEmitter: EventEmitter<void> = new EventEmitter()

  onBoxedInputOuput(value: string){
    console.log(value)
  }
}
