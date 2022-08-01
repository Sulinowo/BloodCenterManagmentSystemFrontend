import { TestBed } from '@angular/core/testing';

import { BloodNeededService } from './blood-needed.service';

describe('BloodNeededService', () => {
  let service: BloodNeededService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodNeededService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
