import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsOurStoryComponent } from './about-us-our-story.component';

describe('AboutUsOurStoryComponent', () => {
  let component: AboutUsOurStoryComponent;
  let fixture: ComponentFixture<AboutUsOurStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsOurStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsOurStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
