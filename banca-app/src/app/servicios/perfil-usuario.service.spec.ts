import { TestBed } from '@angular/core/testing';

import { PerfilUsuarioService } from './perfil-usuario.service';

describe('PerfilUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfilUsuarioService = TestBed.get(PerfilUsuarioService);
    expect(service).toBeTruthy();
  });
});
