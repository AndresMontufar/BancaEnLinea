import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CambioVacaciones} from '../Modelos/Cambio-Vacaciones';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CambioCursoVacacionesService {

  private API = 'http://54.200.138.95:3000/';

  constructor(private http: HttpClient) {}

  public CambiarCurso(request: CambioVacaciones){
    return this.http.put(`${this.API}api/assignment/change-vacation`, request)
  }

  public ObtenerCursos(carnet) {
    return this.http.get(`${this.API}api/account/listado-vacas/${carnet}`);
  }

  public CursosVacaciones() {
    return this.http.get(`${this.API}api/assignment/all_courses_vacation`)
}
}
