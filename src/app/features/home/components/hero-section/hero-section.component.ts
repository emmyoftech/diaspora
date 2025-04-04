import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ImageHandlerComponent } from "../../../shared/components/image-handler/image-handler.component";
import gsap from 'gsap';

@Component({
  selector: 'app-hero-section',
  imports: [
    ImageHandlerComponent
],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('title')
  titleElementRef!: ElementRef<HTMLElement>

  @ViewChild('subTitle')
  subTitleElementRef!: ElementRef<HTMLElement>

  @ViewChild('btn')
  buttonElementRef!: ElementRef<HTMLElement>

  @ViewChild('image', {read: ElementRef})
  imageElementRef!: ElementRef<HTMLElement>

  ngAfterViewInit(): void {
    const timeline = gsap.timeline()

    timeline.fromTo(
      [
        this.titleElementRef.nativeElement,
        this.subTitleElementRef.nativeElement,
        this.buttonElementRef.nativeElement
      ], 
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: .5,
        stagger: 1
      }
    )

    timeline.fromTo(this.imageElementRef.nativeElement, 
      {
        opacity: 0,
        x: 100,
        y: 100
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 2
      },
      "-=2"
    )
  }
}
