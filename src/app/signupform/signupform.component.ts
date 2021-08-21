import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { UserService } from '../services/user.service'

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
    profilePic : new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private usr: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(formdata : any){
    this.usr.addUser(formdata).subscribe(data => { 
      console.log(data);
    })
  }
}

class Profile {
  constructor(
    public id : number,
    public firstname : string,
    public lastname: string,
    public email : string,
    public password : string,
    public profilepicture : ImageBitmap
  ){}
  }

