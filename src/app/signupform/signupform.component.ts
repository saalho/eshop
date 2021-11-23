import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  signupForm = new  FormGroup({
    firstName: new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private usr: UserService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(formdata : any){
    this.usr.addUser(formdata).subscribe(data => { 
      console.log(data);
    })
    this.router.navigate(["kirjaudu"]);
  }
}

class Profile {
  constructor(
    public id : number,
    public firstname : string,
    public lastname: string,
    public email : string,
    public password : string
  ){}
  }

