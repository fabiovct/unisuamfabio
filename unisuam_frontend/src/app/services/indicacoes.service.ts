import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicacoesService {

  private baseUrl = 'http://localhost:8000/api'

  constructor(private http:HttpClient) {

  }

  listar(){
    const head = new HttpHeaders().append('Authorization', 'Bearer '+localStorage.token_unisuam)
    // console.log(localStorage.token);
    return this.http.get(`${this.baseUrl}/indicacoes/listar-indicacoes`, {headers: head}) 
    .toPromise()
    .then(response => response)
    .catch(this.handleError)
  }
  editar(id){
    const head = new HttpHeaders().append('Authorization', 'Bearer '+localStorage.token_unisuam)
    return this.http.get(`${this.baseUrl}/indicacoes/editar-indicacao/${id}`, {headers: head})
    .toPromise()
    .then(response => response)
    .catch(this.handleError)
  }
  cadastrar(data){
    const head = new HttpHeaders().append('Authorization', 'Bearer '+localStorage.token_unisuam)
    return this.http.post(`${this.baseUrl}/indicacoes/criar-indicacao`, data,{headers: head})
    .toPromise()
    .then(response => response)
    .catch(this.handleError)
  }
  excluir(id){
    const head = new HttpHeaders().append('Authorization', 'Bearer '+localStorage.token_unisuam)
    return this.http.delete(`${this.baseUrl}/indicacoes/excluir-indicacao/${id}`, {headers: head})
    .toPromise()
    .then(response => response)
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}