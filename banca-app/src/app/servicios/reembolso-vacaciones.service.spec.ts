import { TestBed } from '@angular/core/testing';

import { ReembolsoVacacionesService } from './reembolso-vacaciones.service';

describe('ReembolsoVacacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReembolsoVacacionesService = TestBed.get(ReembolsoVacacionesService);
    expect(service).toBeTruthy();
  });
});
