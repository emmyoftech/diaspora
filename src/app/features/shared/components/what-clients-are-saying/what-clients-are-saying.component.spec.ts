import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatClientsAreSayingComponent } from './what-clients-are-saying.component';

describe('WhatClientsAreSayingComponent', () => {
  let component: WhatClientsAreSayingComponent;
  let fixture: ComponentFixture<WhatClientsAreSayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatClientsAreSayingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatClientsAreSayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
