import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCoreValuesComponent } from './about-us-core-values.component';

describe('AboutUsCoreValuesComponent', () => {
  let component: AboutUsCoreValuesComponent;
  let fixture: ComponentFixture<AboutUsCoreValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsCoreValuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsCoreValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
