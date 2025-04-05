import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviousProjectsComponent } from './previous-projects.component';
import { PreviousProjectsDefaultComponent } from './routes/previous-projects-default/previous-projects-default.component';
import { PreviousProjectsSpecificProjectComponent } from './routes/previous-projects-specific-project/previous-projects-specific-project.component';

const routes: Routes = [
  {
    path: '',
    component: PreviousProjectsComponent,
    children: [
      {
        path: '',
        component: PreviousProjectsDefaultComponent
      },
      {
        path: ':projectId',
        component: PreviousProjectsSpecificProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviousProjectsRoutingModule { }
