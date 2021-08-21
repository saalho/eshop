import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private http: HttpClient) { }
  noticeSaveDraft(notice:any){
    let postBody = {"header" : notice.header, 
    "description": notice.description, 
    "category": notice.category, 
    "subcategory": notice.subcategory, 
    "price": notice.price,
    "userid":notice.userid,
    "published":0};
    return this.http.post('api/addnotice', postBody,{observe: 'response'});
  }
  noticePublish(notice:any){
    let postBody = {"header" : notice.header, 
    "description": notice.description, 
    "category": notice.category, 
    "subcategory": notice.subcategory, 
    "price": notice.price,
    "userid":notice.userid,
    "published": true};
    console.log(postBody)
    return this.http.post('api/addnotice', postBody,{observe: 'response'});
  }
  getNotices(){
    return this.http.get<any>('api/getnotices');
  }
}
