import { TestBed } from '@angular/core/testing';

import { QualifiedDonationFacadeService } from './qualified-donation-facade.service';

describe('QualifiedDonationFacadeService', () => {
  let service: QualifiedDonationFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualifiedDonationFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
