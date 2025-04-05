import { Component } from '@angular/core';
import { NavigatorComponent } from "../shared/components/navigator/navigator.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { SubcribeComponent } from "../shared/components/subcribe/subcribe.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookies-policy',
  imports: [NavigatorComponent, FooterComponent, SubcribeComponent, CommonModule],
  templateUrl: './cookies-policy.component.html',
  styleUrl: './cookies-policy.component.scss'
})
export class CookiesPolicyComponent {
  date = new Date()
}
