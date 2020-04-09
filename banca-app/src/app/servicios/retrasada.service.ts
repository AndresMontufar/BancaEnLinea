import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RetrasadaService {

  constructor(private http: HttpClient) { }

  private API = 'http://54.200.138.95:3000/';

  public getCursos() {
    return this.http.get(`${this.API}api/user/create-curso`)
  }

  public getcursosretra(carnet: number){
    return this.http.get(`${this.API}api/assignment/assigned-courses/${carnet}`)
  }
}
