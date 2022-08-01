import { TestBed } from '@angular/core/testing';

import { BloodStorageEndDonationFacadeService } from './blood-storage-end-donation-facade.service';

describe('BloodStorageEndDonationFacadeService', () => {
  let service: BloodStorageEndDonationFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodStorageEndDonationFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
