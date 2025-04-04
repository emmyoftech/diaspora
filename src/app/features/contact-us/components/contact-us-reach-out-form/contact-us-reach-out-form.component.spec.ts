import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsReachOutFormComponent } from './contact-us-reach-out-form.component';

describe('ContactUsReachOutFormComponent', () => {
  let component: ContactUsReachOutFormComponent;
  let fixture: ComponentFixture<ContactUsReachOutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsReachOutFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsReachOutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
