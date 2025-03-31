import { Component } from '@angular/core';
import { userProducer } from 'src/app/functions/dev-funcs/user-data-producer.func';
import { ImageHandlerComponent } from "../../../shared/components/image-handler/image-handler.component";

@Component({
  selector: 'app-what-clients-are-saying',
  imports: [ImageHandlerComponent],
  templateUrl: './what-clients-are-saying.component.html',
  styleUrl: './what-clients-are-saying.component.scss'
})
export class WhatClientsAreSayingComponent {
  users = userProducer(2)
}
