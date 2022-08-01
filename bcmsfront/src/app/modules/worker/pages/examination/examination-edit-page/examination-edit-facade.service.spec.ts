import { TestBed } from '@angular/core/testing';

import { ExaminationEditFacadeService } from './examination-edit-facade.service';

describe('ExaminationEditFacadeService', () => {
  let service: ExaminationEditFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminationEditFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
