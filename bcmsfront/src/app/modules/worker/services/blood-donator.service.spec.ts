import { TestBed } from '@angular/core/testing';

import { BloodDonatorService } from './blood-donator.service';

describe('BloodDonatorService', () => {
  let service: BloodDonatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodDonatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
