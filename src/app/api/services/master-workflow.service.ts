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

import { MasterWorkflow } from '../models/master-workflow';
import { MasterWorkflowApiResponse } from '../models/master-workflow-api-response';
import { MasterWorkflowListApiResponse } from '../models/master-workflow-list-api-response';

@Injectable({
  providedIn: 'root',
})
export class MasterWorkflowService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation masterWorkflowGetAll
   */
  static readonly MasterWorkflowGetAllPath = '/api/MasterWorkflow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `masterWorkflowGetAll$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowGetAll$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<MasterWorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MasterWorkflowService.MasterWorkflowGetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MasterWorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `masterWorkflowGetAll$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowGetAll$Plain(params?: {
  }): Observable<MasterWorkflowListApiResponse> {

    return this.masterWorkflowGetAll$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MasterWorkflowListApiResponse>) => r.body as MasterWorkflowListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `masterWorkflowGetAll$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowGetAll$Json$Response(params?: {
  }): Observable<StrictHttpResponse<MasterWorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MasterWorkflowService.MasterWorkflowGetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MasterWorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `masterWorkflowGetAll$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowGetAll$Json(params?: {
  }): Observable<MasterWorkflowListApiResponse> {

    return this.masterWorkflowGetAll$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MasterWorkflowListApiResponse>) => r.body as MasterWorkflowListApiResponse)
    );
  }

  /**
   * Path part for operation masterWorkflowCreateMasterWorkflow
   */
  static readonly MasterWorkflowCreateMasterWorkflowPath = '/api/MasterWorkflow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `masterWorkflowCreateMasterWorkflow$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  masterWorkflowCreateMasterWorkflow$Plain$Response(params?: {
    body?: MasterWorkflow
  }): Observable<StrictHttpResponse<MasterWorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MasterWorkflowService.MasterWorkflowCreateMasterWorkflowPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MasterWorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `masterWorkflowCreateMasterWorkflow$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  masterWorkflowCreateMasterWorkflow$Plain(params?: {
    body?: MasterWorkflow
  }): Observable<MasterWorkflowListApiResponse> {

    return this.masterWorkflowCreateMasterWorkflow$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MasterWorkflowListApiResponse>) => r.body as MasterWorkflowListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `masterWorkflowCreateMasterWorkflow$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  masterWorkflowCreateMasterWorkflow$Json$Response(params?: {
    body?: MasterWorkflow
  }): Observable<StrictHttpResponse<MasterWorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MasterWorkflowService.MasterWorkflowCreateMasterWorkflowPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MasterWorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `masterWorkflowCreateMasterWorkflow$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  masterWorkflowCreateMasterWorkflow$Json(params?: {
    body?: MasterWorkflow
  }): Observable<MasterWorkflowListApiResponse> {

    return this.masterWorkflowCreateMasterWorkflow$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MasterWorkflowListApiResponse>) => r.body as MasterWorkflowListApiResponse)
    );
  }

  /**
   * Path part for operation masterWorkflowGetById
   */
  static readonly MasterWorkflowGetByIdPath = '/api/MasterWorkflow/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `masterWorkflowGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowGetById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<MasterWorkflowApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MasterWorkflowService.MasterWorkflowGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MasterWorkflowApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `masterWorkflowGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowGetById$Plain(params: {
    id: number;
  }): Observable<MasterWorkflowApiResponse> {

    return this.masterWorkflowGetById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MasterWorkflowApiResponse>) => r.body as MasterWorkflowApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `masterWorkflowGetById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowGetById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<MasterWorkflowApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MasterWorkflowService.MasterWorkflowGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MasterWorkflowApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `masterWorkflowGetById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowGetById$Json(params: {
    id: number;
  }): Observable<MasterWorkflowApiResponse> {

    return this.masterWorkflowGetById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MasterWorkflowApiResponse>) => r.body as MasterWorkflowApiResponse)
    );
  }

  /**
   * Path part for operation masterWorkflowUpdateMasterWorkflow
   */
  static readonly MasterWorkflowUpdateMasterWorkflowPath = '/api/MasterWorkflow/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `masterWorkflowUpdateMasterWorkflow$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  masterWorkflowUpdateMasterWorkflow$Plain$Response(params: {
    id: number;
    body?: MasterWorkflow
  }): Observable<StrictHttpResponse<MasterWorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MasterWorkflowService.MasterWorkflowUpdateMasterWorkflowPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MasterWorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `masterWorkflowUpdateMasterWorkflow$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  masterWorkflowUpdateMasterWorkflow$Plain(params: {
    id: number;
    body?: MasterWorkflow
  }): Observable<MasterWorkflowListApiResponse> {

    return this.masterWorkflowUpdateMasterWorkflow$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MasterWorkflowListApiResponse>) => r.body as MasterWorkflowListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `masterWorkflowUpdateMasterWorkflow$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  masterWorkflowUpdateMasterWorkflow$Json$Response(params: {
    id: number;
    body?: MasterWorkflow
  }): Observable<StrictHttpResponse<MasterWorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MasterWorkflowService.MasterWorkflowUpdateMasterWorkflowPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MasterWorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `masterWorkflowUpdateMasterWorkflow$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  masterWorkflowUpdateMasterWorkflow$Json(params: {
    id: number;
    body?: MasterWorkflow
  }): Observable<MasterWorkflowListApiResponse> {

    return this.masterWorkflowUpdateMasterWorkflow$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MasterWorkflowListApiResponse>) => r.body as MasterWorkflowListApiResponse)
    );
  }

  /**
   * Path part for operation masterWorkflowDeleteById
   */
  static readonly MasterWorkflowDeleteByIdPath = '/api/MasterWorkflow/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `masterWorkflowDeleteById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowDeleteById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<MasterWorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MasterWorkflowService.MasterWorkflowDeleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MasterWorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `masterWorkflowDeleteById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowDeleteById$Plain(params: {
    id: number;
  }): Observable<MasterWorkflowListApiResponse> {

    return this.masterWorkflowDeleteById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MasterWorkflowListApiResponse>) => r.body as MasterWorkflowListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `masterWorkflowDeleteById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowDeleteById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<MasterWorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MasterWorkflowService.MasterWorkflowDeleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MasterWorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `masterWorkflowDeleteById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  masterWorkflowDeleteById$Json(params: {
    id: number;
  }): Observable<MasterWorkflowListApiResponse> {

    return this.masterWorkflowDeleteById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MasterWorkflowListApiResponse>) => r.body as MasterWorkflowListApiResponse)
    );
  }

}
