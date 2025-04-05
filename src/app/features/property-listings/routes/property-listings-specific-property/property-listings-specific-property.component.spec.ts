import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingsSpecificPropertyComponent } from './property-listings-specific-property.component';

describe('PropertyListingsSpecificPropertyComponent', () => {
  let component: PropertyListingsSpecificPropertyComponent;
  let fixture: ComponentFixture<PropertyListingsSpecificPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyListingsSpecificPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyListingsSpecificPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
