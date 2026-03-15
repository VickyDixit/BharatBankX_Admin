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

import { UpdatePush } from '../models/update-push';
import { UpdatePushApiResponse } from '../models/update-push-api-response';
import { UpdatePushListApiResponse } from '../models/update-push-list-api-response';

@Injectable({
  providedIn: 'root',
})
export class UpdatePushesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updatePushesGetAll
   */
  static readonly UpdatePushesGetAllPath = '/api/UpdatePushes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePushesGetAll$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePushesGetAll$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<UpdatePushListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UpdatePushesService.UpdatePushesGetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdatePushListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePushesGetAll$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePushesGetAll$Plain(params?: {
  }): Observable<UpdatePushListApiResponse> {

    return this.updatePushesGetAll$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UpdatePushListApiResponse>) => r.body as UpdatePushListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePushesGetAll$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePushesGetAll$Json$Response(params?: {
  }): Observable<StrictHttpResponse<UpdatePushListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UpdatePushesService.UpdatePushesGetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdatePushListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePushesGetAll$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePushesGetAll$Json(params?: {
  }): Observable<UpdatePushListApiResponse> {

    return this.updatePushesGetAll$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UpdatePushListApiResponse>) => r.body as UpdatePushListApiResponse)
    );
  }

  /**
   * Path part for operation updatePushesCreate
   */
  static readonly UpdatePushesCreatePath = '/api/UpdatePushes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePushesCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePushesCreate$Response(params?: {
    body?: UpdatePush
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UpdatePushesService.UpdatePushesCreatePath, 'post');
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
   * To access the full response (for headers, for example), `updatePushesCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePushesCreate(params?: {
    body?: UpdatePush
  }): Observable<void> {

    return this.updatePushesCreate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updatePushesGetById
   */
  static readonly UpdatePushesGetByIdPath = '/api/UpdatePushes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePushesGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePushesGetById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<UpdatePushApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UpdatePushesService.UpdatePushesGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdatePushApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePushesGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePushesGetById$Plain(params: {
    id: number;
  }): Observable<UpdatePushApiResponse> {

    return this.updatePushesGetById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UpdatePushApiResponse>) => r.body as UpdatePushApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePushesGetById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePushesGetById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<UpdatePushApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UpdatePushesService.UpdatePushesGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdatePushApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePushesGetById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePushesGetById$Json(params: {
    id: number;
  }): Observable<UpdatePushApiResponse> {

    return this.updatePushesGetById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UpdatePushApiResponse>) => r.body as UpdatePushApiResponse)
    );
  }

  /**
   * Path part for operation updatePushesUpdate
   */
  static readonly UpdatePushesUpdatePath = '/api/UpdatePushes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePushesUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePushesUpdate$Response(params: {
    id: number;
    body?: UpdatePush
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UpdatePushesService.UpdatePushesUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `updatePushesUpdate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePushesUpdate(params: {
    id: number;
    body?: UpdatePush
  }): Observable<void> {

    return this.updatePushesUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updatePushesDelete
   */
  static readonly UpdatePushesDeletePath = '/api/UpdatePushes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePushesDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePushesDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UpdatePushesService.UpdatePushesDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `updatePushesDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePushesDelete(params: {
    id: number;
  }): Observable<void> {

    return this.updatePushesDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
