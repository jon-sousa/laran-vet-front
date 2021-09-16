import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimaisClientesService {

  constructor(private httpClient: HttpClient) { }

  buscarTodos(): Observable<any>{
    return this.httpClient.get('/api/cliente/animais', {headers: new HttpHeaders({
      'Accept': 'application/json'
    })})
  }

  buscarUm(id: string): Observable<any>{
    return this.httpClient.get(`/api/cliente/animal/${id}`, {headers: new HttpHeaders({
      'Accept': 'application/json'
    })})
  }

  alterar(animal: Animal): Observable<any>{
    return this.httpClient.put('api/animais/alterar', animal, {headers: new HttpHeaders({
      'Accept': 'application/json'
    })})
  }

  deletar(id: number): Observable<any>{
    return this.httpClient.delete(`api/animais/deletar/${id}`, {headers: new HttpHeaders({
      'Accept': 'application/json'
    })})
  }
}
