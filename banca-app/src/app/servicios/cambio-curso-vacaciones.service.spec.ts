import { TestBed } from '@angular/core/testing';

import { CambioCursoVacacionesService } from './cambio-curso-vacaciones.service';

describe('CambioCursoVacacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CambioCursoVacacionesService = TestBed.get(CambioCursoVacacionesService);
    expect(service).toBeTruthy();
  });
});
