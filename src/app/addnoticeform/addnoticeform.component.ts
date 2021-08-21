import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import {CategoriesService} from '../services/categories.service';
import {NoticeService} from '../services/notice.service';

@Component({
  selector: 'app-addnoticeform',
  templateUrl: './addnoticeform.component.html',
  styleUrls: ['./addnoticeform.component.css']
})
export class AddnoticeformComponent implements OnInit {
  allCategories = [];
  subcategories:any;

  noticeForm = new FormGroup({
    header: new FormControl,
    description: new FormControl,
    category: new FormControl,
    subcategory: new FormControl,
    price: new FormControl,
    userid: new FormControl
  })
  constructor(private categories : CategoriesService, private notice : NoticeService) { }

  ngOnInit(): void {
     this.categories.getCategories().subscribe(cat => {
      this.allCategories = cat; 
      console.log(cat);
      console.log(this.allCategories)
  })
  }

  showSubCat(chosenCat: any){
    this.categories.getSubcategories(chosenCat).subscribe(cat => {
      this.subcategories = cat;
      console.log(cat);
      
    }); 
    console.log(this.subcategories);
  }

  onSubmit(formdata:any){
    console.log(formdata)
    this.notice.noticePublish(formdata).subscribe(data => {
      if (data.ok) console.log("Successful!");
      else {
        console.log("Something went wrong :(");
      }
  })
}
  saveDraft(formdata:any){
    this.notice.noticeSaveDraft(formdata).subscribe(data => {
      if (data.ok) console.log("Successful!");
      else {
        console.log("Something went wrong :(");
      }
    })
  }
}
