import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  allCategories = [];
  subcategories:any;
  selectedCat:any;
  
  constructor(private cat: CategoriesService) { }

  ngOnInit(): void {
    this.cat.getCategories().subscribe(cat => {
      this.allCategories = cat; 
      console.log(cat);
  })
}
 showSubcategories(chosenCat:any){
    this.cat.getSubcategories(chosenCat).subscribe(cat => {
      this.subcategories = cat;
      console.log(cat);
      this.selectedCat = chosenCat;
      
    }); 
    console.log(this.subcategories);
  }
}
 