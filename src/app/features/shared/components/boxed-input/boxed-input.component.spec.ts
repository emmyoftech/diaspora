import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxedInputComponent } from './boxed-input.component';

describe('BoxedInputComponent', () => {
  let component: BoxedInputComponent;
  let fixture: ComponentFixture<BoxedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxedInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
