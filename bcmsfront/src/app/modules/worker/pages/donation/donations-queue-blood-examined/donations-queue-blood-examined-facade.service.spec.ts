import { TestBed } from '@angular/core/testing';

import { DonationsQueueBloodExaminedFacadeService } from './donations-queue-blood-examined-facade.service';

describe('DonationsQueueBloodExaminedFacadeService', () => {
  let service: DonationsQueueBloodExaminedFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationsQueueBloodExaminedFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
