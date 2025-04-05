import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousProjectsSpecificProjectComponent } from './previous-projects-specific-project.component';

describe('PreviousProjectsSpecificProjectComponent', () => {
  let component: PreviousProjectsSpecificProjectComponent;
  let fixture: ComponentFixture<PreviousProjectsSpecificProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousProjectsSpecificProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousProjectsSpecificProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
