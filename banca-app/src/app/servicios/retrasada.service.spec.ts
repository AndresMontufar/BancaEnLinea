import { TestBed } from '@angular/core/testing';

import { RetrasadaService } from './retrasada.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('RetrasadaService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: RetrasadaService = TestBed.get(RetrasadaService);
    expect(service).toBeTruthy();
  });
});
