import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { LoaderInterceptor } from './loader.interceptor';

describe('LoaderInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => LoaderInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([LoaderInterceptor])),
        provideHttpClientTesting()
      ]
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});