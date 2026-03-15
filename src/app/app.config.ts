import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes'
import { cacheInterceptor } from './core/interceptors/cache.interceptor';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { authInterceptor } from './core/interceptors/auth.interceptor'; // ← add this
// app.config.ts
import { environment } from '../environments/environment';
import { ApiModule } from './api/api.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([cacheInterceptor, LoaderInterceptor, authInterceptor])
    ),
    provideAnimations(),
    importProvidersFrom(
      ApiModule.forRoot({ rootUrl: environment.apiUrl })  // ← ADD THIS
    )
  ]
};