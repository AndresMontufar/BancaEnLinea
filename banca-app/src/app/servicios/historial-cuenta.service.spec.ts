import { TestBed } from '@angular/core/testing';

import { HistorialCuentaService } from './historial-cuenta.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HistorialCuentaService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: HistorialCuentaService = TestBed.get(HistorialCuentaService);
    expect(service).toBeTruthy();
  });
});
