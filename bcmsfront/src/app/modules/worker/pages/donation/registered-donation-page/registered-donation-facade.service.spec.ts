import { TestBed } from '@angular/core/testing';

import { RegisteredDonationFacadeService } from './registered-donation-facade.service';

describe('RegisteredDonationFacadeService', () => {
  let service: RegisteredDonationFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredDonationFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
