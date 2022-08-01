import { TestBed } from '@angular/core/testing';

import { AddAdminFacadeService } from './add-admin-facade.service';

describe('AddAdminFacadeService', () => {
  let service: AddAdminFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAdminFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
