import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ComponentRef, ContentChild, ElementRef, inject, Input, NO_ERRORS_SCHEMA, OnChanges, OnDestroy, Renderer2, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ButtonGradientLoaderComponent } from './components/button-gradient-loader/button-gradient-loader.component';

@Component({
  selector: 'app-button-loaders',
  imports: [
    CommonModule
  ],
  template: `
    <load-plate [ngClass]="{loading: loading}">

     <ng-template #templateRef></ng-template>
    
    </load-plate>

    <ng-content></ng-content>
  `,
  styleUrl: './button-loaders.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class ButtonLoadersComponent implements OnChanges, AfterContentInit, OnDestroy {
  @Input()
  loadObvs?: Observable<any>

  @Input()
  loadText?: string

  @Input()
  loadType!: "gradient"

  @ContentChild('loadTarget', {read: ElementRef})
  private loadTarget?: ElementRef<HTMLElement>

  @ViewChild("templateRef", {read: ViewContainerRef})
  private viewRef!: ViewContainerRef

  loading = false

  private subscription?: Subscription

  private render = inject(Renderer2)

  ngOnChanges(changes: SimpleChanges): void {
    this.loadType = this.loadType ?? "gradient"

    if(!this.loadObvs || this.loading) return 
    
    this.loadLoaderTemplate()

    this.loading = true 

    this.subscription = this.loadObvs.subscribe(() => {
      this.clearLoader()

      this.loading = false
    })
  }

  ngAfterContentInit(): void {
    if(!this.loadTarget) return

    this.render.setStyle(this.loadTarget.nativeElement, "flex", "1")

    this.render.setStyle(this.loadTarget.nativeElement, "border-radius", "inherit")
  }

  private loadLoaderTemplate(){
    let view!: ComponentRef<any>
    
    switch(this.loadType){
      case "gradient" : view = this.viewRef.createComponent(ButtonGradientLoaderComponent)
        break; 
      default: throw Error(`invalid loader type "${this.loadType}"`);
    }
    
    const {nativeElement} = view.location

    this.render.setStyle(nativeElement, "flex", "1")

    view.setInput("loadMessage", (this.loadText ?? "loading") + "...")
  }

  private clearLoader(){
    this.viewRef.clear()
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
