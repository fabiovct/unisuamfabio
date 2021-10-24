import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicacoesService {

  private baseUrl = 'http://localhost:8000/api'

  constructor(private http:HttpClient) {

  }

  listar(){
    return this.http.get(`${this.baseUrl}/indicacoes/listar-indicacoes`) 
    .toPromise()
    .then(response => response)
    .catch(this.handleError)
  }
  editar(id){
    return this.http.get(`${this.baseUrl}/indicacoes/editar-indicacao/${id}`)
    .toPromise()
    .then(response => response)
    .catch(this.handleError)
  }
  cadastrar(data){
    return this.http.post(`${this.baseUrl}/indicacoes/criar-indicacao`, data)
    .toPromise()
    .then(response => response)
    .catch(this.handleError)
  }
  excluir(id){
    return this.http.delete(`${this.baseUrl}/indicacoes/excluir-indicacao/${id}`)
    .toPromise()
    .then(response => response)
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}