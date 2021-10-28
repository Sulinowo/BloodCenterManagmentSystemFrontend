import { TestBed } from '@angular/core/testing';

import { BloodDonatorDonationDetailsFacadeService } from './blood-donator-donation-details-facade.service';

describe('BloodDonatorDonationDetailsFacadeService', () => {
  let service: BloodDonatorDonationDetailsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodDonatorDonationDetailsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
