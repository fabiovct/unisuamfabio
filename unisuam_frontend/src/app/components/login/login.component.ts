import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    senha:null
  };

  public data = null;
  constructor(
    private login: LoginService,
    ) {}

  ngOnInit() {
    console.log('login')
  }

  onSubmit(){
    // this.Login.login(this.form)
    this.login.login(this.form)
    .then(response => {
      console.log(response)
    })

  }

}
