import { TestBed } from '@angular/core/testing';

import { ResetPasswordFacadeService } from './reset-password-facade.service';

describe('ResetPasswordFacadeService', () => {
  let service: ResetPasswordFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetPasswordFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
