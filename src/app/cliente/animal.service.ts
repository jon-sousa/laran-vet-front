import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private httpClient: HttpClient) { }

  cadastrar(animal: Animal): Observable<any>{
    return this.httpClient.post('api/animais/cadastrar', animal, {headers: new HttpHeaders({
      'Accept': 'application/json'
    })})
  }
}
