import { Component, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { ImageHandlerComponent } from '../shared/components/image-handler/image-handler.component';
import gsap from 'gsap';
import { LogInComponent } from "./components/log-in/log-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { RouterModule } from '@angular/router';
import { AUTH_SWIPER_CAROUSEL_CONFIGURATION } from './config/auth-swiper-settings.config';
import { JQuerySlickOptions, SlickCarouselComponent } from 'ngx-slick-carousel';
import { NGXCarouselComponent } from '../shared/components/ngx-carousel/ngx-carousel.component';

@Component({
    selector: 'app-auth',
    standalone: true,
    providers: [
      {
        provide: AUTH_SWIPER_CAROUSEL_CONFIGURATION.token,
        useValue: AUTH_SWIPER_CAROUSEL_CONFIGURATION.data
      }
    ],
    imports: [
      ImageHandlerComponent,
      LogInComponent,
      SignUpComponent,
      RouterModule,
      NGXCarouselComponent
    ],
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements AfterViewInit {

  @ViewChild('white', {read: ElementRef, static: true})
  white_ele_Ref!: ElementRef<HTMLElement> 

  @ViewChild('fade1', {read: ElementRef, static: true})
  fade_bck_1Ref!: ElementRef<HTMLElement>

  @ViewChild('fade2', {read: ElementRef, static: true})
  fade_bck_2Ref!: ElementRef<HTMLElement>

  @ViewChild('image', {read: ElementRef, static: true})
  image_ele_Ref!: ElementRef<HTMLElement>

  @ViewChild('text', {read: ElementRef, static: true})
  text_ele_Ref!: ElementRef<HTMLElement>

  @ViewChild('textTitle', {read: ElementRef, static: true})
  textTitle_ele_Ref!: ElementRef<HTMLElement>

  @ViewChild(NGXCarouselComponent)
  carouselComponent?: NGXCarouselComponent

  private carousel?: SlickCarouselComponent 

  constructor(
    @Inject(AUTH_SWIPER_CAROUSEL_CONFIGURATION.token) public carousel_options: JQuerySlickOptions
  ){}

  ngAfterViewInit(): void {
    this.animate()

    this.carousel = this.carouselComponent?.ngx_carousel
  }

  private animate (){
    const timeline = gsap.timeline()

    timeline.set(this.white_ele_Ref.nativeElement, {opacity: 0})

    timeline.set(this.fade_bck_1Ref.nativeElement, {opacity: 0, top: "0%", left: "0%"})

    timeline.set(this.fade_bck_2Ref.nativeElement, {opacity: 0})
    
    timeline.set(this.image_ele_Ref.nativeElement, {opacity: 0, top: "0%", left: "0%"})
        
    timeline.set(this.textTitle_ele_Ref.nativeElement, {opacity: 0})

    timeline.set(this.text_ele_Ref.nativeElement, {opacity: 0, y: -100})


    timeline.to(this.white_ele_Ref.nativeElement, {opacity: 1, duration: 1})

    timeline.to(this.fade_bck_2Ref.nativeElement, {opacity: 1, duration: 1})

    timeline.to(this.fade_bck_1Ref.nativeElement, {opacity: 1, top: "-10%", left: "10%", duration: 1}, "-=1")
        
    timeline.to(this.image_ele_Ref.nativeElement, {opacity: 1, top: "10%", left: "-10%", duration: 1}, "-=1")
        
    timeline.to(this.textTitle_ele_Ref.nativeElement, {opacity: 1, duration: 1})

    timeline.to(this.text_ele_Ref.nativeElement, {opacity: 1, y: 0, duration: 1}, "-=.5")
  }

  toSignUp(){
    this.carousel?.slickGoTo(1)
  }

  toLogin(){
    this.carousel?.slickGoTo(0)
  }
}