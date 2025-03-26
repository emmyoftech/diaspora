import { inject, Injectable } from '@angular/core';
import { HttpCallOptions, HttpService } from '../../http.service';
import { User } from 'src/app/entites/User.entity';
import { ApiResponseObject } from '../../api-intergration-general-types.type';
import { LoginCredentials } from './auth-api-types.type';

@Injectable({
  providedIn: 'root'
})
export class AuthApiCallService {
  private httpService = inject(HttpService)

  constructor() { }

  create_user = (user: User, opt?: HttpCallOptions) => this.httpService.httpCall<ApiResponseObject>(['auth', 'init_register'], undefined, opt).post(user)

  login_user = (cred: LoginCredentials, opt?: HttpCallOptions) => this.httpService.httpCall(["auth", 'login'], undefined, opt).post(cred)

  verify_email = (email: string, opt?: HttpCallOptions) => this.httpService.httpCall<ApiResponseObject>(["auth", "init_forgot_password"], opt).post({email})
}
