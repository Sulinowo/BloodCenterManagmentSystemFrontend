import { TestBed } from '@angular/core/testing';

import { BloodExaminedDonationFacadeService } from './blood-examined-donation-facade.service';

describe('BloodExaminedDonationFacadeService', () => {
  let service: BloodExaminedDonationFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodExaminedDonationFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
