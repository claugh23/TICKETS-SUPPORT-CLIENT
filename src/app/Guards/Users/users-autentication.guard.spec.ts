import { TestBed } from '@angular/core/testing';

import { UsersAutenticationGuard } from './users-autentication.guard';

describe('UsersAutenticationGuard', () => {
  let guard: UsersAutenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersAutenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
