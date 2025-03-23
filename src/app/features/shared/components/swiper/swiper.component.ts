import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, inject, Input, NO_ERRORS_SCHEMA, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef, viewChild, ViewChild } from '@angular/core';
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
          <swiper-slide>
            <ng-container *ngTemplateOutlet="item.template">

            </ng-container>
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
  
  private componentElement: HTMLElement = inject(ElementRef).nativeElement

  private render = inject(Renderer2)

  private initSubj = new Subject<void>()

  private initSubs?: Subscription

  initializeed = false

  swiper?: Swiper

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

    this.swiper = this.swiperComponent.nativeElement.swiper

    this.initializeed = true

    this.initSubj.next()
  }

  private renderSwiper(){
    if(this.initializeed && this.swiper && this.options){
      
      this.swiper.params = this.options

      this.swiper.update()
    }
  }

  private handleCarouselSize (carouelDom: HTMLElement) {
    setSizeToMatch(this.componentElement, carouelDom)

    this.render.setStyle(this.componentElement, "position", "relative")

    this.render.setStyle(carouelDom, "position", "absolute")

    this.render.setStyle(carouelDom, "inset", "0")

    this.render.setStyle(carouelDom, "border", "solid 1px")
    
    observeResize(carouelDom, () => setSizeToMatch(this.componentElement, carouelDom))
  }

  ngOnDestroy(): void {  
    this.initSubs?.unsubscribe()
  }
}
