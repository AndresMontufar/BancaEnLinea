import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioService {

  constructor() { }
  public VerInfo(perfil){
    return 'perfil';
  }
}