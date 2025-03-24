import { Component, EventEmitter, Output, output } from '@angular/core';
import SwiperSlideFeature from 'src/app/features/shared/interfaces/swiper-slide-feature.inter';
import { NGXCarouselComponent } from "../../../shared/components/ngx-carousel/ngx-carousel.component";
import { JQuerySlickOptions } from 'ngx-slick-carousel';
import { ImageHandlerComponent } from "../../../shared/components/image-handler/image-handler.component";
import { InputTextFieldDecoratorComponent } from "../../../shared/components/input-text-field-decorator/input-text-field-decorator.component";

@Component({
  selector: 'app-log-in',
  imports: [NGXCarouselComponent, ImageHandlerComponent, InputTextFieldDecoratorComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent implements SwiperSlideFeature {
  @Output("switch")
  private switchEmitter: EventEmitter<void> = new EventEmitter()

  isVisible?: boolean | undefined;
 
}