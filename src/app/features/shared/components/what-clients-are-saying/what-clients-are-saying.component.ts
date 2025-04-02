import { Component } from '@angular/core';
import { userProducer } from 'src/app/functions/dev-funcs/user-data-producer.func';
import { ImageHandlerComponent } from "../image-handler/image-handler.component";
import { SwiperComponent } from "../swiper/swiper.component";
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-what-clients-are-saying',
  imports: [ImageHandlerComponent, SwiperComponent],
  templateUrl: './what-clients-are-saying.component.html',
  styleUrl: './what-clients-are-saying.component.scss'
})
export class WhatClientsAreSayingComponent {
  users = userProducer(10)

  swiper_options: SwiperOptions = {
    spaceBetween: 25,

    breakpoints: {
      1000: {
        slidesPerView: 2,
      },
      820 : {
        slidesPerView: 1
      }
    }
  }
}
