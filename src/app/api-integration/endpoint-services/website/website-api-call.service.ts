import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../http.service';
import { ApiResponseObject } from '../../api-intergration-general-types.type';
import { ContactUsMessage } from './website-api-types.type';

@Injectable({
  providedIn: 'root'
})
export class WebsiteApiCallService {
  private httpService = inject(HttpService)

  constructor() { }

  contact_us = (msg: ContactUsMessage) => this.httpService.httpCall<ApiResponseObject>(['settings', 'contact']).post(msg)
}
