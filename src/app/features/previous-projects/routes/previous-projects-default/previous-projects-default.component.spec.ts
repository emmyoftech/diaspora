import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousProjectsDefaultComponent } from './previous-projects-default.component';

describe('PreviousProjectsDefaultComponent', () => {
  let component: PreviousProjectsDefaultComponent;
  let fixture: ComponentFixture<PreviousProjectsDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousProjectsDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousProjectsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
