import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {crearusuario} from '../Modelos/CrearUsuario'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RegistroUsuarioService {

  private API = 'http://54.200.138.95:3000/';

  constructor(private http: HttpClient) { }

  registrar(request : crearusuario){
    return this.http.post(`${this.API}api/user/create-user/`, request, httpOptions);
  }

}
