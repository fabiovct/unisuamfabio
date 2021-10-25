import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndicacoesService } from 'src/app/services/indicacoes.service';
// import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

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
    // public dropdownng: NgbDropdown,
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

  logout(){
    localStorage.removeItem('token_unisuam')
    
    // this.router.navigateByUrl('/');
    window.location.pathname = '/';
    // $route.reload()
    // window.location.reload()
  }

  /*
    this._DataService.addData(data.value).subscribe(data => {
        this.router.navigate(['/path]);
    });

  */

  showCadastro(){
    if(this.formCadastro == false){
      this.formCadastro = true
    }else{
      this.formCadastro = false
    }
  }
  
  cadastrarIndicacao(){
    this.indicacaoService.cadastrar(this.form)
    .then(indicacoes => {
      if(indicacoes.length > 0){
        this.indicacoes = indicacoes;
        this.formCadastro = false
        alert('Indicação cadastrada com sucesso.')
      }else{
        alert('Falha ao cadastrar Indicação.')
      }

    }).catch(
      // alert('falha ao cadastrar indicação')
      // products => this.router.navigateByUrl('/login')
    );
  }

  updateIndicacao(id){
    this.indicacaoService.editar(id)
    .then(indicacoes => {
      this.indicacoes = indicacoes;
    }).catch(
      // products => this.router.navigateByUrl('/login')
    );
  }
  deleteIndicacao(id){
    this.indicacaoService.excluir(id)
    .then(indicacoes => {
      this.indicacoes = indicacoes;
    }).catch(
      // products => this.router.navigateByUrl('/login')
    );
  }


}
