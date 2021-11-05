import { TestBed } from '@angular/core/testing';

import { DonationsQueueQualifiedFacadeService } from './donations-queue-qualified-facade.service';

describe('DonationsQueueQualifiedFacadeService', () => {
  let service: DonationsQueueQualifiedFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationsQueueQualifiedFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
