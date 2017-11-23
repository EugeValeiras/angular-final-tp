import { TestBed, async, inject } from '@angular/core/testing';

import { NotAuthenticationGuard } from './not-authentication.guard';

describe('NotAuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotAuthenticationGuard]
    });
  });

  it('should ...', inject([NotAuthenticationGuard], (guard: NotAuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
