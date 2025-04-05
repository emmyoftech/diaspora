import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/features/shared/components/footer/footer.component';
import { MiniProjectViewComponent } from 'src/app/features/shared/components/mini-project-view/mini-project-view.component';
import { NavigatorComponent } from 'src/app/features/shared/components/navigator/navigator.component';
import { SubcribeComponent } from 'src/app/features/shared/components/subcribe/subcribe.component';
import { projectProducer } from 'src/app/functions/dev-funcs/projects-data-producer.func';

@Component({
  selector: 'app-previous-projects-default',
  imports: [NavigatorComponent, FooterComponent, SubcribeComponent, MiniProjectViewComponent, RouterModule],
  templateUrl: './previous-projects-default.component.html',
  styleUrl: './previous-projects-default.component.scss'
})
export class PreviousProjectsDefaultComponent {
  projects = projectProducer(6)
}