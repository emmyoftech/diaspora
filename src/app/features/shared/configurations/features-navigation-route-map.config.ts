import { InjectionToken } from "@angular/core";
import { InjectionObject } from "../types/injection-object.type";
import { NavigationObject } from "../types/navigation-object.type";

export const FEATURES_NAVIGATOR_ROUTE_MAP: InjectionObject<NavigationObject[]> = {
    token: new InjectionToken("nav-key-map"),

    data: [
        {
            routeName: "home",
            routeKey: "--"
        },

        {
            routeName: "our services",
            routeKey: "services"
        },

        {
            routeName: "property listings",
            routeKey: "property-list"
        },

        {
            routeName: "about",
            routeKey: "about"
        },

        {
            routeName: "contact",
            routeKey: "contact"
        }
    ]
}