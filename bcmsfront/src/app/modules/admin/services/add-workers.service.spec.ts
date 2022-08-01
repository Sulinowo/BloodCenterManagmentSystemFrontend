import { TestBed } from '@angular/core/testing';

import { AddWorkersService } from './add-workers.service';

describe('AddWorkersService', () => {
  let service: AddWorkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddWorkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
