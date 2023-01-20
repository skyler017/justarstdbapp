import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaurantPageComponent } from './add-restaurant-page.component';

describe('AddRestaurantPageComponent', () => {
  let component: AddRestaurantPageComponent;
  let fixture: ComponentFixture<AddRestaurantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestaurantPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRestaurantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
