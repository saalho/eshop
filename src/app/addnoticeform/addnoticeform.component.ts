import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-addnoticeform',
  templateUrl: './addnoticeform.component.html',
  styleUrls: ['./addnoticeform.component.css']
})
export class AddnoticeformComponent implements OnInit {
  categories = [];
  subcategories = [];

  constructor(private nav : NavbarComponent) { }

  ngOnInit(): void {
  }
 /* categoryClick(){
    this.nav.showSubcategories(var chosenCat);
    this.subcategories = this.nav.subcategories; 
  }*/

}

class Notice {
  constructor(
    public id: number,
    public header: string,
    public pictures: ImageBitmap,
    public description: string,
    public category: string,
    public subcategory?: string
  ){}
}