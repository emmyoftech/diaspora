import { Component } from '@angular/core';
import { NavigatorComponent } from "../shared/components/navigator/navigator.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { SubcribeComponent } from "../shared/components/subcribe/subcribe.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-and-condition',
  imports: [NavigatorComponent, FooterComponent, SubcribeComponent, CommonModule],
  templateUrl: './terms-and-condition.component.html',
  styleUrl: './terms-and-condition.component.scss'
})
export class TermsAndConditionComponent {
  date = new Date()
}
