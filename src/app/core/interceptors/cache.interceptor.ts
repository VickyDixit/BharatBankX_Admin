// cache.interceptor.ts
// Place in: src/app/core/interceptors/cache.interceptor.ts
//
// Functional interceptor for Angular 17+ standalone apps
// Automatically caches ALL GET requests
// Invalidates cache on POST / PUT / DELETE

import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from '../services/cache.service';

// URLs that should NEVER be cached
const EXCLUDED_URLS = [
  'auth/login',
  'auth/logout',
  'auth/refresh',
];

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cacheService = inject(CacheService);

  // Only cache GET requests
  if (req.method !== 'GET') {
    // Invalidate related cache on write operations
    // e.g. POST /api/agent → clears all /api/agent/* cached entries
    const urlParts  = req.url.split('/');
    const baseRoute = urlParts.find(part =>
      part !== 'api' && part !== '' && isNaN(Number(part))
    );
    if (baseRoute) {
      console.log(`[Cache INVALIDATE] ${baseRoute}`);
      cacheService.invalidate(baseRoute);
    }
    return next(req);
  }

  // Skip excluded URLs
  if (EXCLUDED_URLS.some(url => req.url.includes(url))) {
    return next(req);
  }

  // Return cached response if available
  const cached = cacheService.get(req.url);
  if (cached) {
    console.log(`[Cache HIT] ${req.url}`);
    return of(new HttpResponse({ body: cached, status: 200 }));
  }

  // Otherwise call API and cache the response
  console.log(`[Cache MISS] ${req.url}`);
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse && event.status === 200) {
        cacheService.set(req.url, event.body);
      }
    })
  );
};