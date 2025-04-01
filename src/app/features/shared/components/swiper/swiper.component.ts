import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, EmbeddedViewRef, inject, Input, NO_ERRORS_SCHEMA, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { observeResize } from 'src/app/functions/observe-resize.func';
import { setSizeToMatch } from 'src/app/functions/set-size-to-match.func';
import { SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';
import CarouselSlideFeature from '../../interfaces/carousel-slide-feature.inter';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [
    CommonModule,
  ] ,
  template: `
    <swiper-container #swiper>

      @for (item of slideChildrenTemplateRefs; track $index) {
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

  @ContentChildren('slideTempRef', {descendants: true})
  slideChildrenTemplateRefs!: QueryList<TemplateRef<any>>

  @ContentChildren('slideItemInst')
  private slideInstancesRefs!: QueryList<CarouselSlideFeature | ElementRef<HTMLElement>>

  @ViewChildren("viewContainer", {read: ViewContainerRef})
  private viewContainerRefs!: QueryList<ViewContainerRef>
  
  private componentElement: HTMLElement = inject(ElementRef).nativeElement

  private render = inject(Renderer2)

  private initSubj = new Subject<void>()

  private initSubs?: Subscription

  private SlidesWithItemFeature = new Map<number, CarouselSlideFeature & {_hostNode?: HTMLElement}>()

  initializeed = false

  swiper?: Swiper

  ngOnInit(): void {
    this.initSubs = this.initSubj.subscribe(() => {
      this.renderSwiper()
    })
  }

  ngOnChanges(changes: SimpleChanges): void {this.initSubj.next()}

  ngAfterContentInit(): void {
    setTimeout(() => {
      for (let i = 0; i < this.slideInstancesRefs.length; i++) {
        const instance = this.slideInstancesRefs.get(i);
       
        //@ts-ignore
        if(!instance?.nativeElement){
          let slide_feature = this.SlidesWithItemFeature.get(i)

          if(!slide_feature) throw Error("can,t find instance key data")

          //@ts-ignore
          slide_feature = instance
          //@ts-ignore
          slide_feature._hostNode = this.SlidesWithItemFeature.get(i)?._hostNode

          this.SlidesWithItemFeature.delete(i)
          //@ts-ignore
          this.SlidesWithItemFeature.set(i, slide_feature)
        }
      }

      if(this.slideInstancesRefs.length !== this.slideChildrenTemplateRefs.length)
        throw Error("template count must match intance Count")
    
        this.initializeed = true

        this.initSubj.next()
    }, 10);
  }

  ngAfterViewInit(): void {
    if(!this.swiperComponent) return

    this.swiper = this.swiperComponent.nativeElement.swiper

    this.handleCarouselSize(this.swiperComponent.nativeElement)

    for (let i = 0; i < this.viewContainerRefs.length; i++) {
      const viewRef = this.viewContainerRefs.get(i),
      
      templateRef = this.slideChildrenTemplateRefs.get(i)

      if(!templateRef || !viewRef) return
      
      const view: EmbeddedViewRef<CarouselSlideFeature> = viewRef.createEmbeddedView(templateRef),

      hostView = view.rootNodes[0]

      this.handleCarouselItemDom(hostView, i)

      this.SlidesWithItemFeature.set(i, {_hostNode: hostView})
    }
  }

  private renderSwiper(){
    if(this.initializeed && this.swiper && this.options){

      Object.assign(this.swiper.params, this.options)
      //@ts-ignore
      this.runVisiblityFeature(this.swiper, 0, this.SlidesWithItemFeature.get(0)) // run Visibilty Feaure for first slide

      this.handleCarouselSlideFeature()

      this.swiper.update()
    }
  }

  private handleCarouselSize (carouelDom: HTMLElement) {
    this.render.setStyle(this.componentElement, "position", "relative")

    this.render.setStyle(carouelDom, "position", "absolute")

    this.render.setStyle(carouelDom, "inset", "0")

    setSizeToMatch(this.componentElement, carouelDom)
    
    observeResize(this.componentElement, () => setSizeToMatch(this.componentElement, carouelDom))
  }

  private handleCarouselItemDom(itemDom: HTMLElement, index: number){
    this.render.setStyle(itemDom, "height", " 100%")
  }

  private handleCarouselSlideFeature(){
    this.swiper?.on("slideChange", sw => this.SlidesWithItemFeature.forEach((value, key) => this.runVisiblityFeature(sw, key, value)))
    
    this.swiper?.on("resize", sw => this.SlidesWithItemFeature.forEach((value, key) => this.runVisiblityFeature(sw, key, value)))
  }

  private runVisiblityFeature(swiper: Swiper, featureIndex: number, feature: CarouselSlideFeature & {_hostNode?: HTMLElement}){
    let visibleSlides = [];

    const {activeIndex} = swiper,

    {slidesPerView} = swiper.params,

    {x: winXCords} = this.componentElement.getBoundingClientRect()

    if(!feature._hostNode) return

    const {x: slideXCords} = feature._hostNode.getBoundingClientRect()

    
  }

  private hideOrShowElement(dom: HTMLElement, action: "show" | "hide"){
    if(action == "hide"){
      this.render.setStyle(dom, "opacity", 0)

      this.render.setStyle(dom, "pointer-events", "none")
    } else{
      this.render.setStyle(dom, "opacity", 1)

      this.render.setStyle(dom, "pointer-events", "all")
    }
  }

  ngOnDestroy(): void {  
    this.initSubs?.unsubscribe()
  }
}
