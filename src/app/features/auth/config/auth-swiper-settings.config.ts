import { InjectionToken } from "@angular/core"
import { InjectionObject } from "../../shared/types/injection-object.type"
import { JQuerySlickOptions } from "ngx-slick-carousel"

export const AUTH_SWIPER_CAROUSEL_CONFIGURATION: InjectionObject<JQuerySlickOptions> = {
       token: new InjectionToken('auth_swiper_config'),

       data: {
            draggable: false,
            swipe: false
       }
}