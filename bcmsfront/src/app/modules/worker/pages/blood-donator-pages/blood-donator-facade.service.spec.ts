import { TestBed } from '@angular/core/testing';

import { BloodDonatorFacadeService } from './blood-donator-facade.service';

describe('BloodDonatorFacadeService', () => {
  let service: BloodDonatorFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodDonatorFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

