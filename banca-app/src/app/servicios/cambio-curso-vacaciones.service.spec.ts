import { TestBed } from '@angular/core/testing';

import { CambioCursoVacacionesService } from './cambio-curso-vacaciones.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('CambioCursoVacacionesService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: CambioCursoVacacionesService = TestBed.get(CambioCursoVacacionesService);
    expect(service).toBeTruthy();
  });
});
