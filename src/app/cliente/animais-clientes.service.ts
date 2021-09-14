import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimaisClientesService {

  constructor(private httpClient: HttpClient) { }

  buscarTodos(): Observable<any>{
    return this.httpClient.get('/api/cliente/animais')
  }

  buscarUm(id: string): Observable<any>{
    return this.httpClient.get(`/api/cliente/animal/${id}`)
  }
}
