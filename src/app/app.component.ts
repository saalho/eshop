import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'eshop';
  constructor(private http: HttpClient){}
  apiTest(){
    this.http.get('/api/test').subscribe((data) =>{
      if(data){
        console.log("Proxy works")
      }
    })
  }
  ngOnInit(){}
}


