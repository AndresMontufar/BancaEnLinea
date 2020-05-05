import { TestBed } from '@angular/core/testing';

import { ReembolsoVacacionesService } from './reembolso-vacaciones.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ReembolsoVacacionesService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: ReembolsoVacacionesService = TestBed.get(ReembolsoVacacionesService);
    expect(service).toBeTruthy();
  });
});
