import { Component, input, Input } from '@angular/core';
import { Project } from 'src/app/entites/Project.entity';
import { ImageHandlerComponent } from "../image-handler/image-handler.component";
import { CommonModule } from '@angular/common';
import { TextShortnerPipe } from '../../pipes/text-shortner.pipe';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-mini-project-view',
  imports: [
    CommonModule,
    ImageHandlerComponent,
    TextShortnerPipe,
    IconComponent
],
  template: `
    <app-image-handler [src]="'assets/images/property-images/' + project?.imageUrl"></app-image-handler>

    <section class="info-holder">
      <h4>{{project?.title}}</h4>

      <p>{{project?.description ?? 'unknown' | textShortner : 100}} </p>

      <ul>
        <li>
          <p>Category</p>
          <b>{{project?.category ?? 'unknown' | textShortner }}</b>
        </li>

        <li>
          <p>Client</p>
          <b>{{project?.client}}</b>
        </li>

        <li>
          <p>Date</p>
          <b>{{project?.date | date : "dd-MMM-yy"}}</b>
        </li>

      </ul>

      <div *ngIf="showContact">
        <button>
          <app-icon name="envelope"></app-icon>
          <p>Email</p>
        </button>
        <button>
          <app-icon name="phone"></app-icon>
          <p>Call</p>
        </button>
        
      </div>
    </section>
  `,
  styleUrl: './mini-project-view.component.scss'
})
export class MiniProjectViewComponent {
  @Input()
  project?: Project

  @Input()
  showContact?: boolean
}
