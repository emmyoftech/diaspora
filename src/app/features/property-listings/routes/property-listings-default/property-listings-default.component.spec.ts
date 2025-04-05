import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingsDefaultComponent } from './property-listings-default.component';

describe('PropertyListingsDefaultComponent', () => {
  let component: PropertyListingsDefaultComponent;
  let fixture: ComponentFixture<PropertyListingsDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyListingsDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyListingsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
