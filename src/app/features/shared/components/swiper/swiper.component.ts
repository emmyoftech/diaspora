import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, inject, Input, NO_ERRORS_SCHEMA, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef, viewChild, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { observeResize } from 'src/app/functions/observe-resize.func';
import { setSizeToMatch } from 'src/app/functions/set-size-to-match.func';
import { SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <swiper-container #swiper>

      @for (item of carouselContentChildren; track $index) {
        <ng-container>
          <swiper-slide #swiperSlide>
            <ng-container *ngTemplateOutlet="item"></ng-container>
          </swiper-slide>
        </ng-container>
      }

    </swiper-container>

  `,
  styleUrl: './swiper.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class SwiperComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input()
  options?: SwiperOptions

  @ViewChild('swiper')
  private swiperComponent?: ElementRef<SwiperContainer>

  @ContentChildren('slide')
  carouselContentChildren!: QueryList<any>
  
  @ViewChildren("swiperSlide", {read: ElementRef})
  swiperSlidesQueryRef?: QueryList<ElementRef<HTMLElement>>
  
  private componentElement: HTMLElement = inject(ElementRef).nativeElement

  private render = inject(Renderer2)

  private viewContainerRef = inject(ViewContainerRef)

  private initSubj = new Subject<void>()

  private initSubs?: Subscription

  initializeed = false

  Swiper?: Swiper

  ngOnInit(): void {
    this.initSubs = this.initSubj.subscribe(() => {
      this.renderSwiper()
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderSwiper()
  }

  ngAfterViewInit(): void {    
    if(!this.swiperComponent) return

    this.handleCarouselSize(this.swiperComponent.nativeElement)

    this.Swiper = this.swiperComponent.nativeElement.swiper

    this.initializeed = true

    this.initSubj.next()

    this.swiperSlidesQueryRef?.forEach(slide => {
      const {nativeElement} = slide
      //@ts-ignore
      this.handleCarouselItemDom(nativeElement.firstChild)
    })
  } 

  private renderSwiper(){
    if(this.initializeed && this.Swiper && this.options){
      
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
    this.render.setStyle(itemDom, "height", " 100")
  }

  ngOnDestroy(): void {  
    this.initSubs?.unsubscribe()
  }
}
