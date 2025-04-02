import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesWhyChooseUsComponent } from './our-services-why-choose-us.component';

describe('OurServicesWhyChooseUsComponent', () => {
  let component: OurServicesWhyChooseUsComponent;
  let fixture: ComponentFixture<OurServicesWhyChooseUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServicesWhyChooseUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesWhyChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
