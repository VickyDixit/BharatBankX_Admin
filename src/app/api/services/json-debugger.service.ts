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

import { JsonDebugger } from '../models/json-debugger';
import { JsonDebuggerApiResponse } from '../models/json-debugger-api-response';
import { JsonDebuggerListApiResponse } from '../models/json-debugger-list-api-response';

@Injectable({
  providedIn: 'root',
})
export class JsonDebuggerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation jsonDebuggerGetAll
   */
  static readonly JsonDebuggerGetAllPath = '/api/JsonDebugger';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jsonDebuggerGetAll$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  jsonDebuggerGetAll$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<JsonDebuggerListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, JsonDebuggerService.JsonDebuggerGetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonDebuggerListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jsonDebuggerGetAll$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  jsonDebuggerGetAll$Plain(params?: {
  }): Observable<JsonDebuggerListApiResponse> {

    return this.jsonDebuggerGetAll$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<JsonDebuggerListApiResponse>) => r.body as JsonDebuggerListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jsonDebuggerGetAll$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  jsonDebuggerGetAll$Json$Response(params?: {
  }): Observable<StrictHttpResponse<JsonDebuggerListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, JsonDebuggerService.JsonDebuggerGetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonDebuggerListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jsonDebuggerGetAll$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  jsonDebuggerGetAll$Json(params?: {
  }): Observable<JsonDebuggerListApiResponse> {

    return this.jsonDebuggerGetAll$Json$Response(params).pipe(
      map((r: StrictHttpResponse<JsonDebuggerListApiResponse>) => r.body as JsonDebuggerListApiResponse)
    );
  }

  /**
   * Path part for operation jsonDebuggerCreate
   */
  static readonly JsonDebuggerCreatePath = '/api/JsonDebugger';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jsonDebuggerCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  jsonDebuggerCreate$Response(params?: {
    body?: JsonDebugger
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, JsonDebuggerService.JsonDebuggerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jsonDebuggerCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  jsonDebuggerCreate(params?: {
    body?: JsonDebugger
  }): Observable<void> {

    return this.jsonDebuggerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation jsonDebuggerGetById
   */
  static readonly JsonDebuggerGetByIdPath = '/api/JsonDebugger/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jsonDebuggerGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  jsonDebuggerGetById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<JsonDebuggerApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, JsonDebuggerService.JsonDebuggerGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonDebuggerApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jsonDebuggerGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  jsonDebuggerGetById$Plain(params: {
    id: number;
  }): Observable<JsonDebuggerApiResponse> {

    return this.jsonDebuggerGetById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<JsonDebuggerApiResponse>) => r.body as JsonDebuggerApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jsonDebuggerGetById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  jsonDebuggerGetById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<JsonDebuggerApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, JsonDebuggerService.JsonDebuggerGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonDebuggerApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jsonDebuggerGetById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  jsonDebuggerGetById$Json(params: {
    id: number;
  }): Observable<JsonDebuggerApiResponse> {

    return this.jsonDebuggerGetById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<JsonDebuggerApiResponse>) => r.body as JsonDebuggerApiResponse)
    );
  }

  /**
   * Path part for operation jsonDebuggerUpdate
   */
  static readonly JsonDebuggerUpdatePath = '/api/JsonDebugger/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jsonDebuggerUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  jsonDebuggerUpdate$Response(params: {
    id: number;
    body?: JsonDebugger
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, JsonDebuggerService.JsonDebuggerUpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jsonDebuggerUpdate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  jsonDebuggerUpdate(params: {
    id: number;
    body?: JsonDebugger
  }): Observable<void> {

    return this.jsonDebuggerUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation jsonDebuggerDelete
   */
  static readonly JsonDebuggerDeletePath = '/api/JsonDebugger/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jsonDebuggerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  jsonDebuggerDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, JsonDebuggerService.JsonDebuggerDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jsonDebuggerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  jsonDebuggerDelete(params: {
    id: number;
  }): Observable<void> {

    return this.jsonDebuggerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
