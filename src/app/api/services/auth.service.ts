/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation authLogin
   */
  static readonly AuthLoginPath = '/api/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLogin$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLogin$Plain$Response(params?: {
    body?: LoginRequest
  }): Observable<StrictHttpResponse<LoginResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthLoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authLogin$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLogin$Plain(params?: {
    body?: LoginRequest
  }): Observable<LoginResponse> {

    return this.authLogin$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResponse>) => r.body as LoginResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLogin$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLogin$Json$Response(params?: {
    body?: LoginRequest
  }): Observable<StrictHttpResponse<LoginResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthLoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authLogin$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLogin$Json(params?: {
    body?: LoginRequest
  }): Observable<LoginResponse> {

    return this.authLogin$Json$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResponse>) => r.body as LoginResponse)
    );
  }

}
