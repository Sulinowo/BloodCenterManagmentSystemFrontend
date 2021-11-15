import { TestBed } from '@angular/core/testing';

import { ShowWorkersFacadeService } from './show-workers-facade.service';

describe('ShowWorkersFacadeService', () => {
  let service: ShowWorkersFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowWorkersFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
