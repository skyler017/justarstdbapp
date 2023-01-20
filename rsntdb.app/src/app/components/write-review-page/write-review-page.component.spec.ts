import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteReviewPageComponent } from './write-review-page.component';

describe('WriteReviewPageComponent', () => {
  let component: WriteReviewPageComponent;
  let fixture: ComponentFixture<WriteReviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteReviewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
