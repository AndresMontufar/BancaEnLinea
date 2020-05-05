import { TestBed } from '@angular/core/testing';

import { TransaccionService } from './transaccion.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('TransaccionService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: TransaccionService = TestBed.get(TransaccionService);
    expect(service).toBeTruthy();
  });
});
