import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAConsultationComponent } from './book-a-consultation.component';

describe('BookAConsultationComponent', () => {
  let component: BookAConsultationComponent;
  let fixture: ComponentFixture<BookAConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookAConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
