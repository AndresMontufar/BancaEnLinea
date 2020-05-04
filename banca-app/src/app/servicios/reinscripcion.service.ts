import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reinscripciones} from '../Modelos/reinscripcion';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReinscripcionService {

  private API = 'http://54.200.138.95:3000/';

  constructor(private http: HttpClient) {}

  public Asign(reincribir: Reinscripciones) {
    return this.http.post(`${this.API}api/user/reinscripcion`, reincribir);
  }
}
