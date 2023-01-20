import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFocusPageComponent } from './restaurant-focus-page.component';

describe('RestaurantFocusPageComponent', () => {
  let component: RestaurantFocusPageComponent;
  let fixture: ComponentFixture<RestaurantFocusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantFocusPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantFocusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
