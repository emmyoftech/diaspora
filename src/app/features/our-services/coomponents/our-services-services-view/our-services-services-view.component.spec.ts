import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesServicesViewComponent } from './our-services-services-view.component';

describe('OurServicesServicesViewComponent', () => {
  let component: OurServicesServicesViewComponent;
  let fixture: ComponentFixture<OurServicesServicesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServicesServicesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesServicesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
