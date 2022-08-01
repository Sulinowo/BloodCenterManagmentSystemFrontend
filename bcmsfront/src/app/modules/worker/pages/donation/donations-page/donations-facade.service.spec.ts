import { TestBed } from '@angular/core/testing';

import { DonationsFacadeService } from './donations-facade.service';

describe('DonationsFacadeService', () => {
  let service: DonationsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
