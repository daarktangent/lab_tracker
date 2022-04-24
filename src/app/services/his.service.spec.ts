import { TestBed } from '@angular/core/testing';

import { HISService } from './his.service';

describe('HISService', () => {
  let service: HISService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HISService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
