import { Component } from '@angular/core';
import SwiperSlideFeature from 'src/app/features/shared/interfaces/swiper-slide-feature.inter';

@Component({
  selector: 'app-log-in',
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent implements SwiperSlideFeature {
  D = "not ready"
  
  onNotVisible() {
    console.log("Babby is not ready " + this.D)
  }
}
