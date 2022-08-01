import { TestBed } from '@angular/core/testing';

import { SetNewPasswordFacadeService } from './set-new-password-facade.service';

describe('SetNewPasswordFacadeService', () => {
  let service: SetNewPasswordFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetNewPasswordFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
