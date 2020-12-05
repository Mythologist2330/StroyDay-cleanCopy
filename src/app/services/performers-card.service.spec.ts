import { TestBed } from '@angular/core/testing';

import { PerformersCardService } from './performers-card.service';

describe('PerformersCardService', () => {
  let service: PerformersCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformersCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
