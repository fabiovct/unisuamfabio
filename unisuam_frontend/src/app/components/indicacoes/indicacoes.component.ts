import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndicacoesService } from 'src/app/services/indicacoes.service';

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
  public indicacoes = [];

  constructor(
    private router: Router,
    private indicacaoService: IndicacoesService,
  ) { }

  ngOnInit() {
    // const formCadastro = true;
    this.indicacaoService.listar()
    .then(indicacoes => {
      console.log(indicacoes)
      this.indicacoes = indicacoes;
    }).catch(
      // products => this.router.navigateByUrl('/login')
  );
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
  
  cadastrarIndicacao(){
    this.indicacaoService.cadastrar(this.form);
  }

  updateIndicacao(id){
    this.indicacaoService.editar(id);
    this.indicacaoService.listar()
    .then(indicacoes => {
      this.indicacoes = indicacoes;
    }).catch(
      // products => this.router.navigateByUrl('/login')
    );
  }
  deleteIndicacao(id){
    console.log(id)
  }


}
