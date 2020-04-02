import { TestBed } from '@angular/core/testing';

import { SuficienciaService } from './suficiencia.service';

describe('SuficienciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuficienciaService = TestBed.get(SuficienciaService);
    expect(service).toBeTruthy();
  });
});
