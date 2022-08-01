import { TestBed } from '@angular/core/testing';

import { AddWorkerFacadeService } from './add-worker-facade.service';

describe('AddWorkerFacadeService', () => {
  let service: AddWorkerFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddWorkerFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
