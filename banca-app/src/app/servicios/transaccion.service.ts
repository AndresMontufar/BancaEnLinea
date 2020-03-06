import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  private API = 'http://54.200.138.95:3000/';

  constructor(private http: HttpClient) {}

  public Deposit(request, carnet) {
    return this.http.put(`${this.API}api/account/deposit/${carnet}`, request, httpOptions);
  }

  public Withdraw(request, carnet) {
    return this.http.put(`${this.API}api/account/withdraw-account/${carnet}`, request, httpOptions);
  }
}

