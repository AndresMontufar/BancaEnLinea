import { TestBed } from '@angular/core/testing';

import { RetrasadaService } from './retrasada.service';

describe('RetrasadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrasadaService = TestBed.get(RetrasadaService);
    expect(service).toBeTruthy();
  });
});
