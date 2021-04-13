import { TestBed } from '@angular/core/testing';

import { UnauthorizedInterceptor } from './unauthorized-interceptor';

describe('NotAuthorizedInterceptorService', () => {
  let service: UnauthorizedInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnauthorizedInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
