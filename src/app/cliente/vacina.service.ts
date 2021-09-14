import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from './vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor(private httpClient: HttpClient) { }

  agendar(vacina: Vacina): Observable<any>{
    return this.httpClient.post('/api/vacina/agendar', vacina)
  }

  todasPorCliente(): Observable<any>{
    return this.httpClient.get('/api/vacina/todas-por-cliente')
  }
}
