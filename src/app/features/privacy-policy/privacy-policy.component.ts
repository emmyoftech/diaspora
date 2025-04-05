import { Component } from '@angular/core';
import { NavigatorComponent } from "../shared/components/navigator/navigator.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { SubcribeComponent } from "../shared/components/subcribe/subcribe.component";

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, NavigatorComponent, FooterComponent, SubcribeComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  date = new Date()
}
