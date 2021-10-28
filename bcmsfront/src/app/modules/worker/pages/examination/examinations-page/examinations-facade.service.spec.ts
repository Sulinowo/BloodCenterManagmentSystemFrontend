import { TestBed } from '@angular/core/testing';

import { ExaminationsFacadeService } from './examinations-facade.service';

describe('ExaminationsFacadeService', () => {
  let service: ExaminationsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminationsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
