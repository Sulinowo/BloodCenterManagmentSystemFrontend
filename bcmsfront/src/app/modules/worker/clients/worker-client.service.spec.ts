import { TestBed } from '@angular/core/testing';

import { WorkerClientService } from './worker-client.service';

describe('WorkerClientService', () => {
  let service: WorkerClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
