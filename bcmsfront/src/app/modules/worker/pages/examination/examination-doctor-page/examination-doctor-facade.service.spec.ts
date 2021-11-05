import { TestBed } from '@angular/core/testing';

import { ExaminationDoctorFacadeService } from './examination-doctor-facade.service';

describe('ExaminationDoctorFacadeService', () => {
  let service: ExaminationDoctorFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminationDoctorFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
