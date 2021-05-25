import { TestBed } from '@angular/core/testing';

import { PlatformreadyGuard } from './platformready.guard';

describe('PlatformreadyGuard', () => {
  let guard: PlatformreadyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlatformreadyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
