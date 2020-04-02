import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Suficiencia} from '../Modelos/Suficiencia';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SuficienciaService {

  private API = 'http://54.200.138.95:3000/';

  constructor(private http: HttpClient) {}

  public Asign(suficiencia: Suficiencia) {
    return this.http.post(`${this.API}api/account/create-sufis`, suficiencia);
  }

  public getCursos() {
    return this.http.get(`${this.API}api/user/create-curso`)
  }

  public getCuentas(carnet) {
    return this.http.get(`${this.API}api/account/get-account/${carnet}`);
  }
}
