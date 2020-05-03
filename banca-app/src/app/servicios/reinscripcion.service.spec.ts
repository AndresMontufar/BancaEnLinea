import { TestBed } from '@angular/core/testing';

import { ReinscripcionService } from './reinscripcion.service';

describe('ReinscripcionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReinscripcionService = TestBed.get(ReinscripcionService);
    expect(service).toBeTruthy();
  });
});
