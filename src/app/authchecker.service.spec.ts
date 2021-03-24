import { TestBed } from '@angular/core/testing';

import { AuthcheckerService } from './authchecker.service';

describe('AuthcheckerService', () => {
  let service: AuthcheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthcheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
