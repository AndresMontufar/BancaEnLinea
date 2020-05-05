import { TestBed } from '@angular/core/testing';

import { SemestreService } from './semestre.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('SemestreService', () => {
  let controller: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    controller = TestBed.get(HttpTestingController);
    const service: SemestreService = TestBed.get(SemestreService);
    expect(service).toBeTruthy();
  });
});
