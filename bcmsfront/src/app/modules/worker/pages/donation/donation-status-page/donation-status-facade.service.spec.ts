import { TestBed } from '@angular/core/testing';

import { DonationStatusFacadeService } from './donation-status-facade.service';

describe('DonationStatusFacadeService', () => {
  let service: DonationStatusFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationStatusFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
