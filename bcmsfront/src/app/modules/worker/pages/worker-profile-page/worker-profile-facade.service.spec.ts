import { TestBed } from '@angular/core/testing';

import { WorkerProfileFacadeService } from './worker-profile-facade.service';

describe('WorkerProfileFacadeService', () => {
  let service: WorkerProfileFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerProfileFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
