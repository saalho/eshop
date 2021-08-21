import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginMessage = '';
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private usr : UserService, private http : HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(formdata: any){
    this.usr.checkCredentials(formdata).subscribe(data => { 
      if (data.status == 404){
        this.loginMessage = "Sähköposti tai salasana on väärä";
      }
      else if (data.status == 200){
        this.loginMessage = "Kirjautuminen ok"
        sessionStorage.setItem('loggedUser', JSON.stringify(data) );
       // window.sessionStorage()
      }
    })
  }

}
