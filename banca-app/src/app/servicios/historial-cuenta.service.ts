import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalService} from "./global.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HistorialCuentaService {

  private API = 'http://54.200.138.95:3000/';

  constructor(private http: HttpClient,  public global: GlobalService) { }

  public getHistorial(){
    return this.http.get(`${this.API}api/user/historial_cuenta/${this.global.carne}`, httpOptions);
  }
 }
