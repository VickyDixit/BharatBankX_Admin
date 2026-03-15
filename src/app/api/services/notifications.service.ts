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

import { Notification } from '../models/notification';
import { NotificationApiResponse } from '../models/notification-api-response';
import { NotificationListApiResponse } from '../models/notification-list-api-response';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation notificationsGetAll
   */
  static readonly NotificationsGetAllPath = '/api/Notifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsGetAll$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetAll$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<NotificationListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsGetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsGetAll$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetAll$Plain(params?: {
  }): Observable<NotificationListApiResponse> {

    return this.notificationsGetAll$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationListApiResponse>) => r.body as NotificationListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsGetAll$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetAll$Json$Response(params?: {
  }): Observable<StrictHttpResponse<NotificationListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsGetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsGetAll$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetAll$Json(params?: {
  }): Observable<NotificationListApiResponse> {

    return this.notificationsGetAll$Json$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationListApiResponse>) => r.body as NotificationListApiResponse)
    );
  }

  /**
   * Path part for operation notificationsCreate
   */
  static readonly NotificationsCreatePath = '/api/Notifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  notificationsCreate$Response(params?: {
    body?: Notification
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsCreatePath, 'post');
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
   * To access the full response (for headers, for example), `notificationsCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  notificationsCreate(params?: {
    body?: Notification
  }): Observable<void> {

    return this.notificationsCreate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation notificationsGetById
   */
  static readonly NotificationsGetByIdPath = '/api/Notifications/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<NotificationApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetById$Plain(params: {
    id: number;
  }): Observable<NotificationApiResponse> {

    return this.notificationsGetById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationApiResponse>) => r.body as NotificationApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsGetById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<NotificationApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsGetById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetById$Json(params: {
    id: number;
  }): Observable<NotificationApiResponse> {

    return this.notificationsGetById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationApiResponse>) => r.body as NotificationApiResponse)
    );
  }

  /**
   * Path part for operation notificationsUpdate
   */
  static readonly NotificationsUpdatePath = '/api/Notifications/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  notificationsUpdate$Response(params: {
    id: number;
    body?: Notification
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsUpdatePath, 'put');
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
   * To access the full response (for headers, for example), `notificationsUpdate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  notificationsUpdate(params: {
    id: number;
    body?: Notification
  }): Observable<void> {

    return this.notificationsUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation notificationsDelete
   */
  static readonly NotificationsDeletePath = '/api/Notifications/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `notificationsDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsDelete(params: {
    id: number;
  }): Observable<void> {

    return this.notificationsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation notificationsGetByAgent
   */
  static readonly NotificationsGetByAgentPath = '/api/Notifications/agent/{agentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsGetByAgent$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetByAgent$Plain$Response(params: {
    agentId: number;
  }): Observable<StrictHttpResponse<NotificationApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsGetByAgentPath, 'get');
    if (params) {
      rb.path('agentId', params.agentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsGetByAgent$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetByAgent$Plain(params: {
    agentId: number;
  }): Observable<NotificationApiResponse> {

    return this.notificationsGetByAgent$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationApiResponse>) => r.body as NotificationApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsGetByAgent$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetByAgent$Json$Response(params: {
    agentId: number;
  }): Observable<StrictHttpResponse<NotificationApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsGetByAgentPath, 'get');
    if (params) {
      rb.path('agentId', params.agentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsGetByAgent$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetByAgent$Json(params: {
    agentId: number;
  }): Observable<NotificationApiResponse> {

    return this.notificationsGetByAgent$Json$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationApiResponse>) => r.body as NotificationApiResponse)
    );
  }

}
