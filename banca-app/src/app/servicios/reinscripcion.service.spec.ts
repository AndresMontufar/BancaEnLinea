import { TestBed } from '@angular/core/testing';

import { ReinscripcionService } from './reinscripcion.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ReinscripcionService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: ReinscripcionService = TestBed.get(ReinscripcionService);
    expect(service).toBeTruthy();
  });
});
