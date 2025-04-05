import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-previous-projects',
  imports: [RouterModule],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PreviousProjectsComponent {}