import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Autenticavel } from '../autenticavel';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoClienteService {

  constructor(private httpClient: HttpClient) { }

  shakeHand(): Observable<any>{
    return this.httpClient.get('/sanctum/csrf-cookie')
  }

  login(dados: Autenticavel): Observable<any>{
    return this.httpClient.post('/api/cliente/login', dados)
  }

  cadastrar(dados: Cliente): Observable<any>{
    return this.httpClient.post('/api/cliente/cadastrar', dados)
  }

  logout() : Observable<any>{
    return this.httpClient.get('/api/cliente/logout')
  }
}
