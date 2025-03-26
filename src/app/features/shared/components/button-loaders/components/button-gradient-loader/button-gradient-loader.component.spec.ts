import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGradientLoaderComponent } from './button-gradient-loader.component';

describe('ButtonGradientLoaderComponent', () => {
  let component: ButtonGradientLoaderComponent;
  let fixture: ComponentFixture<ButtonGradientLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGradientLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGradientLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
