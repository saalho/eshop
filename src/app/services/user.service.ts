import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  addUser(user:any){
    let postBody = {"firstname" : user.firstName, "lastname": user.lastName, "email": user.email, "password": user.password};
    return this.http.post('api/adduser', postBody);
  }
  checkCredentials(user:any){
    let postBody = {"email": user.email, "password": user.password};
    return this.http.post('api/login', postBody, {observe: 'response'});
  }
  isLoggedIn(user:any){
    return this.http.get<any>('api/checklogin');
  }
}

