import { Component } from '@angular/core';
import { projectProducer } from 'src/app/functions/dev-funcs/projects-data-producer.func';
import { NavigatorComponent } from "../../../shared/components/navigator/navigator.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { SubcribeComponent } from "../../../shared/components/subcribe/subcribe.component";

@Component({
  selector: 'app-previous-projects-specific-project',
  imports: [NavigatorComponent, FooterComponent, SubcribeComponent],
  templateUrl: './previous-projects-specific-project.component.html',
  styleUrl: './previous-projects-specific-project.component.scss'
})
export class PreviousProjectsSpecificProjectComponent {
  project = projectProducer(1)[0]
}
