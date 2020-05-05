import { TestBed } from '@angular/core/testing';

import { PerfilUsuarioService } from './perfil-usuario.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PerfilUsuarioService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: PerfilUsuarioService = TestBed.get(PerfilUsuarioService);
    expect(service).toBeTruthy();
  });
});
