import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ImageHandlerComponent } from '../shared/image-handler/image-handler.component';
import gsap from 'gsap';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ImageHandlerComponent
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

  ngAfterViewInit(): void {
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
}