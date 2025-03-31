import { Component } from '@angular/core';
import { projectProducer } from 'src/app/functions/dev-funcs/projects-data-producer.func';
import { MiniProjectViewComponent } from "../../../shared/components/mini-project-view/mini-project-view.component";

@Component({
  selector: 'app-previous-projects',
  imports: [MiniProjectViewComponent],
  templateUrl: './previous-projects.component.html',
  styleUrl: './previous-projects.component.scss'
})
export class PreviousProjectsComponent {
  projects = projectProducer(2)
}
