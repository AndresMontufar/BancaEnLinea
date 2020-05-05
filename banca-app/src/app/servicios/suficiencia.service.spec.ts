import { TestBed } from '@angular/core/testing';

import { SuficienciaService } from './suficiencia.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('SuficienciaService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: SuficienciaService = TestBed.get(SuficienciaService);
    expect(service).toBeTruthy();
  });
});
