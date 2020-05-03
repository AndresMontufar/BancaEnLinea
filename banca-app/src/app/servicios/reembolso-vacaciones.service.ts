import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reembolso} from '../Modelos/Reembolso';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReembolsoVacacionesService {

  private API = 'http://54.200.138.95:3000/';

  constructor(private http: HttpClient) {}

  public getCuentas(carnet) {
    return this.http.get(`${this.API}api/account/get-account/${carnet}`);
  }

  public ObtenerCursos(carnet) {
    return this.http.get(`${this.API}api/account/listado-vacas/${carnet}`);
  }

  public Desasignar(request: Reembolso){
    return this.http.post(`${this.API}api/user/reembolsos`, request);
  }
}
