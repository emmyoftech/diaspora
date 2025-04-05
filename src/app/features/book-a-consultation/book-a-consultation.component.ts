import { Component } from '@angular/core';
import { NavigatorComponent } from "../shared/components/navigator/navigator.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { IconComponent } from "../shared/components/icon/icon.component";

@Component({
  selector: 'app-book-a-consultation',
  imports: [NavigatorComponent, FooterComponent, IconComponent],
  templateUrl: './book-a-consultation.component.html',
  styleUrl: './book-a-consultation.component.scss'
})
export class BookAConsultationComponent {

}
