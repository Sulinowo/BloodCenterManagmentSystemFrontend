import { TestBed } from '@angular/core/testing';

import { DonationQueueRegisteredFacadeService } from './donation-queue-registered-facade.service';

describe('DonationQueueRegisteredFacadeService', () => {
  let service: DonationQueueRegisteredFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationQueueRegisteredFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
