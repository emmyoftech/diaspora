import { InjectionToken } from "@angular/core"

export type InjectionObject<T> = {
    token: InjectionToken<T>,

    data: T
}