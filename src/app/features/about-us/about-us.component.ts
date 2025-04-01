import { Component } from '@angular/core';
import { NavigatorComponent } from "../shared/components/navigator/navigator.component";
import { SubcribeComponent } from "../shared/components/subcribe/subcribe.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { AboutUsWhoWeAreComponent } from "./components/about-us-who-we-are/about-us-who-we-are.component";
import { AboutUsOurStoryComponent } from "./components/about-us-our-story/about-us-our-story.component";

@Component({
  selector: 'app-about-us',
  imports: [NavigatorComponent, SubcribeComponent, FooterComponent, AboutUsWhoWeAreComponent, AboutUsOurStoryComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
