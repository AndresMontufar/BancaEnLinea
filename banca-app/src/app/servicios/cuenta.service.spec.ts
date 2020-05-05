import { TestBed } from '@angular/core/testing';

import { CuentaService } from './cuenta.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('CuentaService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: CuentaService = TestBed.get(CuentaService);
    expect(service).toBeTruthy();
  });
});
