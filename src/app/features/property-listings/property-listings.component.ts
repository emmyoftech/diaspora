import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-listings',
  imports: [
    RouterModule
  ],
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class PropertyListingsComponent {}