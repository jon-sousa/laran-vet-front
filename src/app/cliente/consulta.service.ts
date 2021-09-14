import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Consulta} from './consulta'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private httpClient: HttpClient) { }

  salvar(consulta: Consulta): Observable<any>{
    return this.httpClient.post('api/consulta/salvar', consulta)
  }

  pagar(consulta: Consulta): Observable<any>{
    consulta.pago = true
    return this.httpClient.put('api/consulta/atualizar', consulta)
  }

  todasPorCliente(): Observable<any>{
    return this.httpClient.get('api/consulta/todas-por-cliente')
  }
}
