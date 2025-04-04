import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsFAQsComponent } from './contact-us-faqs.component';

describe('ContactUsFAQsComponent', () => {
  let component: ContactUsFAQsComponent;
  let fixture: ComponentFixture<ContactUsFAQsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsFAQsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsFAQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
