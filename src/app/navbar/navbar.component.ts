import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../services/categories.service';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSidenavModule} from '@angular/material/sidenav'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  allCategories = [];
  subcategories:any;
  selectedCat:any;
  
  constructor(private categories: CategoriesService) { }

  ngOnInit(): void {
    this.categories.getCategories().subscribe(cat => {
      this.allCategories = cat; 
      console.log(cat);
  })
}
 showSubcategories(chosenCat:any){
    this.categories.getSubcategories(chosenCat).subscribe(cat => {
      this.subcategories = cat;
      console.log(cat);
      this.selectedCat = chosenCat;
      
    }); 
    console.log(this.subcategories);
  }
  openNav() {
    document.getElementById("mySidenav")!.style.width = "250px";
    document.getElementById("main")!.style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft= "0";
  }
}
 