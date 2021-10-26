import { TestBed } from '@angular/core/testing';

import { BloodDonatorDonationsFacadeService } from './blood-donator-donations-facade.service';

describe('BloodDonatorDonationsFacadeService', () => {
  let service: BloodDonatorDonationsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodDonatorDonationsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
