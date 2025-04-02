import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesTalkToAPropertyManagerComponent } from './our-services-talk-to-a-property-manager.component';

describe('OurServicesTalkToAPropertyManagerComponent', () => {
  let component: OurServicesTalkToAPropertyManagerComponent;
  let fixture: ComponentFixture<OurServicesTalkToAPropertyManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServicesTalkToAPropertyManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesTalkToAPropertyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
