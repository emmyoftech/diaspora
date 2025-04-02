import { Component } from '@angular/core';
import { NavigatorComponent } from "../shared/components/navigator/navigator.component";
import { SubcribeComponent } from "../shared/components/subcribe/subcribe.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { AboutUsWhoWeAreComponent } from "./components/about-us-who-we-are/about-us-who-we-are.component";
import { AboutUsOurStoryComponent } from "./components/about-us-our-story/about-us-our-story.component";
import { AboutUsCoreValuesComponent } from "./components/about-us-core-values/about-us-core-values.component";
import { AboutUsOurImpactComponent } from "./components/about-us-our-impact/about-us-our-impact.component";

@Component({
  selector: 'app-about-us',
  imports: [NavigatorComponent, SubcribeComponent, FooterComponent, AboutUsWhoWeAreComponent, AboutUsOurStoryComponent, AboutUsCoreValuesComponent, AboutUsOurImpactComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
