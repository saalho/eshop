import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
    getCategories(){
      return this.http.get<any>('api/getcategories');
    }
}
