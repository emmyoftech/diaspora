import { Component } from '@angular/core';
import SwiperSlideFeature from 'src/app/features/shared/interfaces/swiper-slide-feature.inter';

@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements SwiperSlideFeature {

  onVisible(){
    console.log("i am visible sign in")
  };
}
