import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsOurImpactComponent } from './about-us-our-impact.component';

describe('AboutUsOurImpactComponent', () => {
  let component: AboutUsOurImpactComponent;
  let fixture: ComponentFixture<AboutUsOurImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsOurImpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsOurImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
