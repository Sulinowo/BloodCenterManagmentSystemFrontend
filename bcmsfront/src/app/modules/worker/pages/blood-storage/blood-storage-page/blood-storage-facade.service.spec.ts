import { TestBed } from '@angular/core/testing';

import { BloodStorageFacadeService } from './blood-storage-facade.service';

describe('BloodStorageFacadeService', () => {
  let service: BloodStorageFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodStorageFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
