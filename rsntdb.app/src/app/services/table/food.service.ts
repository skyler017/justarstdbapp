import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { /*BehaviorSubject,*/ Observable/*, of */} from 'rxjs';
import { environment } from 'src/environments/environment';

import { Food } from 'src/app/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private endpoint: string = "food";

  constructor(private http: HttpClient) { }


  public getAllFood(): Observable<Food[]> {
    return this.http.get<Food[]>(environment.baseUrl + this.endpoint);
  }

  public getFoodByFood(id: number): Observable<Food> {
    return this.http.get<Food>(environment.baseUrl + this.endpoint + id);
  }

  public AddFoodItem(food: Food): Observable<Food> {
    return this.http.post<Food>(`${ this.authUrl }/register`, food).pipe(
      tap(response => {
        if (response) {
          this.authSuccess(response);
        }
      })
    );
  };
}
