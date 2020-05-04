import { TestBed } from '@angular/core/testing';

import { HistorialCuentaService } from './historial-cuenta.service';

describe('HistorialCuentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorialCuentaService = TestBed.get(HistorialCuentaService);
    expect(service).toBeTruthy();
  });
});
