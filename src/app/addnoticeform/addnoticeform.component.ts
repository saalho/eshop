import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {CategoriesService} from '../services/categories.service';
import {NoticeService} from '../services/notice.service';

@Component({
  selector: 'app-addnoticeform',
  templateUrl: './addnoticeform.component.html',
  styleUrls: ['./addnoticeform.component.css']
})
export class AddnoticeformComponent implements OnInit {
  allCategories = [];

  noticeForm = new FormGroup({
    header: new FormControl,
    description: new FormControl,
    category: new FormControl,
    price: new FormControl,
    //TODO: get userid from session data
    userid: new FormControl
  })
  constructor(private categories : CategoriesService, private notice : NoticeService, private router:Router) { }

  ngOnInit(): void {
     this.categories.getCategories().subscribe(cat => {
      this.allCategories = cat; 
      console.log(cat);
      console.log(this.allCategories)
  })
  }

  

  onSubmit(formdata:any){

    console.log(formdata);
    this.notice.noticePublish(formdata).subscribe(data => {
      if (data.ok){
        console.log("Successful!");
        this.router.navigate(["etusivu"]);
      } 
      else {
        console.log("Something went wrong :(");
      }
  })
}
  saveDraft(formdata:any){
    this.notice.noticeSaveDraft(formdata).subscribe(data => {
      if (data.ok) {
        console.log("Successful!");
        this.router.navigate(["etusivu"]);
      }
      else {
        console.log("Something went wrong :(");
      }
    })
  }
}
