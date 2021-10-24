import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

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
    private router: Router,
    ) {}

  ngOnInit() {
    console.log('login')
  }

  onSubmit(){
    // this.Login.login(this.form)
    this.login.login(this.form)
    .then(response => {
      if(response == 0){
        alert('Senha ou email invalidos')
      }else{
        localStorage.setItem('token_unisuam',response);
        this.router.navigateByUrl('/indicacoes')
      }
    })

  }

}
