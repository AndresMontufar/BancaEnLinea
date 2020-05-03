import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Semestres} from '../Modelos/semestre';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  private API = 'http://54.200.138.95:3000/';

  constructor(private http: HttpClient) {}

  public Asign(semestre: Semestres) {
    return this.http.post(`${this.API}api/assignment/assigned-semestre`, semestre);
  }
}
