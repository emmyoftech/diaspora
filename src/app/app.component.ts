import { Component, DoCheck, ElementRef, inject } from '@angular/core';
import { AllChildElementsFlexer } from './functions/all-child-node-flexer.func';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'diaspora';

  private componentElement: HTMLElement = inject(ElementRef).nativeElement

  ngDoCheck(): void {
    AllChildElementsFlexer(this.componentElement, ['router-outlet'])
  }
}
