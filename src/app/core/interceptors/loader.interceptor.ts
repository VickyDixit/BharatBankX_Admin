import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { LoaderService } from '../services/loader.service';

export const LoaderInterceptor: HttpInterceptorFn = (req, next) => {

  const loader = inject(LoaderService);
  const router = inject(Router);

  loader.show();

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        localStorage.removeItem('bbx_token');
        localStorage.removeItem('bbx_user');
        localStorage.removeItem('bbx_role');
        sessionStorage.clear();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    }),
    finalize(() => loader.hide())
  );
};