import { TestBed } from '@angular/core/testing';

import { BloodDonatorDetailsFacadeService } from './blood-donator-details-facade.service';

describe('BloodDonatorDetailsFacadeService', () => {
  let service: BloodDonatorDetailsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodDonatorDetailsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
