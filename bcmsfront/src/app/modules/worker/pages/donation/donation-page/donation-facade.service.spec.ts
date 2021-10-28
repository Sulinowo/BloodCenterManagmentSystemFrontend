import { TestBed } from '@angular/core/testing';

import { DonationFacadeService } from './donation-facade.service';

describe('DonationFacadeService', () => {
  let service: DonationFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
