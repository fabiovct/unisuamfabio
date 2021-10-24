import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indicacoes',
  templateUrl: './indicacoes.component.html',
  styleUrls: ['./indicacoes.component.css']
})
export class IndicacoesComponent implements OnInit {
  formCadastro = false;
  public form = {
    nome:null,
    cpf:null,
    telefone:null,
    email:null
  };

  constructor(
    private router: Router,
    // private indicacaoService: Indica,
  ) { }

  ngOnInit() {
    // const formCadastro = true;
  }
  /*
nome, cpf, telefone, email
  */

  // logout(){
  //   localStorage.removeItem('token');
  //   this.router.navigateByUrl('/login');
  // }

  showCadastro(){
    if(this.formCadastro == false){
      this.formCadastro = true
    }else{
      this.formCadastro = false
    }
  }

}
