import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsWhoWeAreComponent } from './about-us-who-we-are.component';

describe('AboutUsWhoWeAreComponent', () => {
  let component: AboutUsWhoWeAreComponent;
  let fixture: ComponentFixture<AboutUsWhoWeAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsWhoWeAreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsWhoWeAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
