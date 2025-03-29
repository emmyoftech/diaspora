import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { register } from 'swiper/element/bundle'

import gsap from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger)

register()



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
