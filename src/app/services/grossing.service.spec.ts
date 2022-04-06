import { TestBed } from '@angular/core/testing';

import { GrossingService } from './grossing.service';

describe('GrossingService', () => {
  let service: GrossingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrossingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
