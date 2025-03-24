import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextFieldDecoratorComponent } from './input-text-field-decorator.component';

describe('InputTextFieldDecoratorComponent', () => {
  let component: InputTextFieldDecoratorComponent;
  let fixture: ComponentFixture<InputTextFieldDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextFieldDecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextFieldDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
