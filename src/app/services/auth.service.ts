import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLoggedIn = false;
  constructor(private http : HttpClient){}

  login(email: string, password: string){
    let postBody = {"email": email, "password": password};
    return this.http.post<any>('api/login', postBody, {observe: 'response'});
  }

  register(user : any){
    let postBody = {"firstname" : user.firstName, "lastname": user.lastName, "email": user.email, "password": user.password};
    return this.http.post<any>('api/register', postBody, {observe: 'response'});
  }

  getLoginStatus(){
    return this.http.get<any>('api/isloggedin')
  }

  logout(){
  this.isUserLoggedIn = false;
  return this.http.get<any>('api/logout'); 
  }
}
