import { TestBed } from '@angular/core/testing';

import { ExaminationDoctorEditFacadeService } from './examination-doctor-edit-facade.service';

describe('ExaminationDoctorEditFacadeService', () => {
  let service: ExaminationDoctorEditFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminationDoctorEditFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
