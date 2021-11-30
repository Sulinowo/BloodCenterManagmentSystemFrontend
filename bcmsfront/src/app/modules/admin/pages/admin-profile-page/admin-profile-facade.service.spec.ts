import { TestBed } from '@angular/core/testing';

import { AdminProfileFacadeService } from './admin-profile-facade.service';

describe('AdminProfileFacadeService', () => {
  let service: AdminProfileFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProfileFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
