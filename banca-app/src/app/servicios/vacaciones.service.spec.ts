import { TestBed } from '@angular/core/testing';

import { VacacionesService } from './vacaciones.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('VacacionesService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: VacacionesService = TestBed.get(VacacionesService);
    expect(service).toBeTruthy();
  });
});
