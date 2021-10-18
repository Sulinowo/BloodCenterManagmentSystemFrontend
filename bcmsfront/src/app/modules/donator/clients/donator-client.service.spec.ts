import { TestBed } from '@angular/core/testing';

import { DonatorClientService } from './donator-client.service';

describe('DonatorClientService', () => {
  let service: DonatorClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonatorClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
