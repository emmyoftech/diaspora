import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBackgroundDecoratorComponent } from './blue-background-decorator.component';

describe('BlueBackgroundDecoratorComponent', () => {
  let component: BlueBackgroundDecoratorComponent;
  let fixture: ComponentFixture<BlueBackgroundDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueBackgroundDecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueBackgroundDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
