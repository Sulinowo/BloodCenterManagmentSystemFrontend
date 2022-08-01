import { TestBed } from '@angular/core/testing';

import { ResetPasswordClientService } from './reset-password-client.service';

describe('ResetPasswordClientService', () => {
  let service: ResetPasswordClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetPasswordClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
