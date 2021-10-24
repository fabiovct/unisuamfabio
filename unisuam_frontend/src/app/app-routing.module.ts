import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicacoesComponent } from './components/indicacoes/indicacoes.component';
import { LoginComponent } from './components/login/login.component';



const appRoutes:  Routes = [
  {
  path:'',
  component: LoginComponent,
  //canActivate: [BeforeLoginService]
  },

  {
  path:'indicacoes',
  component: IndicacoesComponent,
  //canActivate: [AfterLoginService]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
