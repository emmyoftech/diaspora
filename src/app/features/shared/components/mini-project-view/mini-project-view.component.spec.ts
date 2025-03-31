import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProjectViewComponent } from './mini-project-view.component';

describe('MiniProjectViewComponent', () => {
  let component: MiniProjectViewComponent;
  let fixture: ComponentFixture<MiniProjectViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniProjectViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
