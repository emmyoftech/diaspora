import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EmbeddedViewRef, inject, Input, NO_ERRORS_SCHEMA, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef, viewChild, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { observeResize } from 'src/app/functions/observe-resize.func';
import { setSizeToMatch } from 'src/app/functions/set-size-to-match.func';
import { SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';
import SwiperSlideFeature from '../../interfaces/swiper-slide-feature.inter';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <swiper-container #swiper>

      @for (item of carouselContentChildren; track $index) {
        <ng-container>
          <swiper-slide>
            <ng-container #viewContainer></ng-container>
          </swiper-slide>
        </ng-container>
      }

    </swiper-container> 
  `,
  styles: [''],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SwiperComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges, OnDestroy {
  @Input()
  options?: SwiperOptions

  @ViewChild('swiper')
  private swiperComponent?: ElementRef<SwiperContainer>

  @ContentChildren('slide', {descendants: true})
  carouselContentChildren!: QueryList<TemplateRef<any>>

  @ContentChildren('slideItem')
  private xyz!: QueryList<SwiperSlideFeature>

  @ViewChildren("viewContainer", {read: ViewContainerRef})
  private viewContainerRefs!: QueryList<ViewContainerRef>
  
  private componentElement: HTMLElement = inject(ElementRef).nativeElement

  private render = inject(Renderer2)

  private initSubj = new Subject<void>()

  private initSubs?: Subscription

  private SlidesWithItemFeature = new Map<number, SwiperSlideFeature>()

  initializeed = false

  Swiper?: Swiper

  ngOnInit(): void {
    this.initSubs = this.initSubj.subscribe(() => {
      this.renderSwiper()
    })
  }

  ngOnChanges(changes: SimpleChanges): void {this.initSubj.next()}

  ngAfterViewInit(): void {    
    if(!this.swiperComponent) return

    this.handleCarouselSize(this.swiperComponent.nativeElement)

    this.Swiper = this.swiperComponent.nativeElement.swiper

    this.viewContainerRefs.forEach((viewRef, index) => {
      const templateRef = this.carouselContentChildren.get(index)

      if(!templateRef) return
      
      const view: EmbeddedViewRef<SwiperSlideFeature> = viewRef.createEmbeddedView(templateRef)

      this.handleCarouselItemDom(view.rootNodes[0])
    })
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.xyz.forEach((slide, index) => this.SlidesWithItemFeature.set(index, slide))
      
      this.initializeed = true

      this.initSubj.next()
    }, 10);
  }

  private renderSwiper(){
    if(this.initializeed && this.Swiper && this.options){
      this.handleSwiperSlideFeature()
      
      this.Swiper.params = this.options

      this.Swiper.update()
    }
  }

  private handleCarouselSize (carouelDom: HTMLElement) {
    this.render.setStyle(this.componentElement, "position", "relative")

    this.render.setStyle(carouelDom, "position", "absolute")

    this.render.setStyle(carouelDom, "inset", "0")

    this.render.setStyle(carouelDom, "border", "solid 1px")

    setSizeToMatch(this.componentElement, carouelDom)
    
    observeResize(this.componentElement, () => setSizeToMatch(this.componentElement, carouelDom))
  }

  private handleCarouselItemDom(itemDom: HTMLElement){
    this.render.setStyle(itemDom, "height", " 100%")
  }

  private handleSwiperSlideFeature(){

  }

  ngOnDestroy(): void {  
    this.initSubs?.unsubscribe()
  }
}
