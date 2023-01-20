import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WriteReviewPageComponent } from './components/write-review-page/write-review-page.component';
import { RestaurantFocusPageComponent } from './components/restaurant-focus-page/restaurant-focus-page.component';
import { AddRestaurantPageComponent } from './components/add-restaurant-page/add-restaurant-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WriteReviewPageComponent,
    RestaurantFocusPageComponent,
    AddRestaurantPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
