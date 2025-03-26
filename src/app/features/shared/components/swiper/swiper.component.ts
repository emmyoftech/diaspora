import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChildren, ElementRef, EmbeddedViewRef, inject, Input, NO_ERRORS_SCHEMA, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
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
export class SwiperComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
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

  ngAfterViewInit(): void {
    if(!this.swiperComponent) return

    this.swiper = this.swiperComponent.nativeElement.swiper

    this.handleCarouselSize(this.swiperComponent.nativeElement)

    this.handleCarouselSlideFeature()

    for (let i = 0; i < this.viewContainerRefs.length; i++) {
      const viewRef = this.viewContainerRefs.get(i),
      
      templateRef = this.slideChildrenTemplateRefs.get(i)

      if(!templateRef || !viewRef) return
      
      const view: EmbeddedViewRef<CarouselSlideFeature> = viewRef.createEmbeddedView(templateRef),

      hostView = view.rootNodes[0]

      this.handleCarouselItemDom(hostView, i)

      this.SlidesWithItemFeature.set(i, {_hostNode: hostView})
    }

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
      
        this.runVisiblityFeature(0, "visible") // run Visibilty Feaure for first slide

        this.initializeed = true

        this.initSubj.next()
    }, 10);
  }

  private renderSwiper(){
    if(this.initializeed && this.swiper && this.options)
      this.swiper.params = {
        ...this.swiper.params,
        ...this.options
      }

      console.log(this.swiper?.params)
  }

  private handleCarouselSize (carouelDom: HTMLElement) {
    this.render.setStyle(this.componentElement, "position", "relative")

    this.render.setStyle(carouelDom, "position", "absolute")

    this.render.setStyle(carouelDom, "inset", "0")

    this.render.setStyle(carouelDom, "border", "solid 1px")

    setSizeToMatch(this.componentElement, carouelDom)
    
    observeResize(this.componentElement, () => setSizeToMatch(this.componentElement, carouelDom))
  }

  private handleCarouselItemDom(itemDom: HTMLElement, index: number){
    this.render.setStyle(itemDom, "height", " 100%")

    if(index > 0) this.hideOrShowElement(itemDom, "hide")
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

  private handleCarouselSlideFeature(){
    this.swiper?.on("slideChange", sw => {
      const {activeIndex} = sw

      this.SlidesWithItemFeature
      .forEach((value, key) => this.runVisiblityFeature(key, key == activeIndex ? 'visible' : 'not-visible'))
   
    })  
  }

  private runVisiblityFeature(index: number, action: "visible" | "not-visible"){
    const feature = this.SlidesWithItemFeature.get(index)

    if(!feature) throw Error("Unknown")

      if(action == "visible"){
      //@ts-ignore
      this.hideOrShowElement(feature._hostNode, "show")

      feature.isVisible = true

      if(feature.onVisible) feature.onVisible()
    } else {
        //@ts-ignore
        this.hideOrShowElement(feature._hostNode, "hide")

        feature.isVisible = false
        
        if(feature.onNotVisible) feature.onNotVisible()
    }
  }

  ngOnDestroy(): void {  
    this.initSubs?.unsubscribe()
  }
}
