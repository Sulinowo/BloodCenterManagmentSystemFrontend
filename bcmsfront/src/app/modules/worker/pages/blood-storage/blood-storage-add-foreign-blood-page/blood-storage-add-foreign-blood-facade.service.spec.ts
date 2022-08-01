import { TestBed } from '@angular/core/testing';

import { BloodStorageAddForeignBloodFacadeService } from './blood-storage-add-foreign-blood-facade.service';

describe('BloodStorageAddForeignBloodFacadeService', () => {
  let service: BloodStorageAddForeignBloodFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodStorageAddForeignBloodFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
