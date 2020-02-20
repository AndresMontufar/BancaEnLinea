import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {crearusuario} from '../Modelos/CrearUsuario';


@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioService {

  private API = 'http://54.200.138.95:3000/';

  constructor(private http: HttpClient) { }

  public datos(carnet){
    return this.http.get(`${this.API}api/user/profile/${carnet}`);
  }

  registrar(request : crearusuario,carnet){
    return this.http.put(`${this.API}api/user/update-account/${carnet}`, request);
  }


  public eliminar(carnet){
    return this.http.put(`${this.API}api/user/disabled_account/${carnet}`,null);
  }
}
