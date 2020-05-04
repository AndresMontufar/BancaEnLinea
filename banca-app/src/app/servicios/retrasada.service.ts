import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Suficiencia} from '../Modelos/vacasiones';
import {Retrasada} from '../Modelos/retrasada';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RetrasadaService {

  constructor(private http: HttpClient) { }



  private API = 'http://54.200.138.95:3000/';

  public getCursos() {
    return this.http.get(`${this.API}api/user/create-curso`)
  }

  public getCursosVacas() {
    return this.http.get(`${this.API}api/assignment/all_courses_vacation`)
  }

  public getCuentas(carnet) {
    return this.http.get(`${this.API}api/account/get-account/${carnet}`);
  }

  public getCursosVacasAsig(carnet) {
    return this.http.get(`${this.API}api/account/listado-vacas/${carnet}`);
  }

  public getcursosretra(carnet: number){
    return this.http.get(`${this.API}api/assignment/assigned-courses/${carnet}`)
  }

  registrar(request: Suficiencia) {
    return this.http.post(`${this.API}api/account/asignar-vacas`, request, httpOptions);
  }

  public Asign(retra: Retrasada) {
    return this.http.post(`${this.API}api/account/create-retrasada`, retra);
  }
}
