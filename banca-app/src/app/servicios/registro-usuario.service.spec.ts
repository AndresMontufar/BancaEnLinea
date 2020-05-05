import { TestBed } from '@angular/core/testing';

import { RegistroUsuarioService } from './registro-usuario.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('RegistroUsuarioService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: RegistroUsuarioService = TestBed.get(RegistroUsuarioService);
    expect(service).toBeTruthy();
  });
});
