import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cuenta} from '../Modelos/Cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private API = 'http://54.200.138.95:3000/';

  constructor(private http: HttpClient) {}

  public getAccounts(carnet) {
    return this.http.get(`${this.API}api/account/get-account/${carnet}`);
  }
}
