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

import { WorkflowForm } from '../models/workflow-form';
import { WorkflowFormApiResponse } from '../models/workflow-form-api-response';
import { WorkflowFormListApiResponse } from '../models/workflow-form-list-api-response';

@Injectable({
  providedIn: 'root',
})
export class WorkflowFormsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation workflowFormsGetAllWorkflowForms
   */
  static readonly WorkflowFormsGetAllWorkflowFormsPath = '/api/WorkflowForms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsGetAllWorkflowForms$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetAllWorkflowForms$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<WorkflowFormListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsGetAllWorkflowFormsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsGetAllWorkflowForms$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetAllWorkflowForms$Plain(params?: {
  }): Observable<WorkflowFormListApiResponse> {

    return this.workflowFormsGetAllWorkflowForms$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormListApiResponse>) => r.body as WorkflowFormListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsGetAllWorkflowForms$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetAllWorkflowForms$Json$Response(params?: {
  }): Observable<StrictHttpResponse<WorkflowFormListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsGetAllWorkflowFormsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsGetAllWorkflowForms$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetAllWorkflowForms$Json(params?: {
  }): Observable<WorkflowFormListApiResponse> {

    return this.workflowFormsGetAllWorkflowForms$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormListApiResponse>) => r.body as WorkflowFormListApiResponse)
    );
  }

  /**
   * Path part for operation workflowFormsCreateWorkflowForm
   */
  static readonly WorkflowFormsCreateWorkflowFormPath = '/api/WorkflowForms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsCreateWorkflowForm$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowFormsCreateWorkflowForm$Plain$Response(params?: {
    body?: WorkflowForm
  }): Observable<StrictHttpResponse<WorkflowFormApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsCreateWorkflowFormPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsCreateWorkflowForm$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowFormsCreateWorkflowForm$Plain(params?: {
    body?: WorkflowForm
  }): Observable<WorkflowFormApiResponse> {

    return this.workflowFormsCreateWorkflowForm$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormApiResponse>) => r.body as WorkflowFormApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsCreateWorkflowForm$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowFormsCreateWorkflowForm$Json$Response(params?: {
    body?: WorkflowForm
  }): Observable<StrictHttpResponse<WorkflowFormApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsCreateWorkflowFormPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsCreateWorkflowForm$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowFormsCreateWorkflowForm$Json(params?: {
    body?: WorkflowForm
  }): Observable<WorkflowFormApiResponse> {

    return this.workflowFormsCreateWorkflowForm$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormApiResponse>) => r.body as WorkflowFormApiResponse)
    );
  }

  /**
   * Path part for operation workflowFormsGetById
   */
  static readonly WorkflowFormsGetByIdPath = '/api/WorkflowForms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<WorkflowFormApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetById$Plain(params: {
    id: number;
  }): Observable<WorkflowFormApiResponse> {

    return this.workflowFormsGetById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormApiResponse>) => r.body as WorkflowFormApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsGetById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<WorkflowFormApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsGetById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetById$Json(params: {
    id: number;
  }): Observable<WorkflowFormApiResponse> {

    return this.workflowFormsGetById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormApiResponse>) => r.body as WorkflowFormApiResponse)
    );
  }

  /**
   * Path part for operation workflowFormsUpdateWorkflowForm
   */
  static readonly WorkflowFormsUpdateWorkflowFormPath = '/api/WorkflowForms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsUpdateWorkflowForm$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowFormsUpdateWorkflowForm$Plain$Response(params: {
    id: number;
    body?: WorkflowForm
  }): Observable<StrictHttpResponse<WorkflowFormListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsUpdateWorkflowFormPath, 'put');
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
        return r as StrictHttpResponse<WorkflowFormListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsUpdateWorkflowForm$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowFormsUpdateWorkflowForm$Plain(params: {
    id: number;
    body?: WorkflowForm
  }): Observable<WorkflowFormListApiResponse> {

    return this.workflowFormsUpdateWorkflowForm$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormListApiResponse>) => r.body as WorkflowFormListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsUpdateWorkflowForm$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowFormsUpdateWorkflowForm$Json$Response(params: {
    id: number;
    body?: WorkflowForm
  }): Observable<StrictHttpResponse<WorkflowFormListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsUpdateWorkflowFormPath, 'put');
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
        return r as StrictHttpResponse<WorkflowFormListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsUpdateWorkflowForm$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowFormsUpdateWorkflowForm$Json(params: {
    id: number;
    body?: WorkflowForm
  }): Observable<WorkflowFormListApiResponse> {

    return this.workflowFormsUpdateWorkflowForm$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormListApiResponse>) => r.body as WorkflowFormListApiResponse)
    );
  }

  /**
   * Path part for operation workflowFormsDeleteById
   */
  static readonly WorkflowFormsDeleteByIdPath = '/api/WorkflowForms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsDeleteById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsDeleteById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<WorkflowFormListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsDeleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsDeleteById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsDeleteById$Plain(params: {
    id: number;
  }): Observable<WorkflowFormListApiResponse> {

    return this.workflowFormsDeleteById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormListApiResponse>) => r.body as WorkflowFormListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsDeleteById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsDeleteById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<WorkflowFormListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsDeleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsDeleteById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsDeleteById$Json(params: {
    id: number;
  }): Observable<WorkflowFormListApiResponse> {

    return this.workflowFormsDeleteById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormListApiResponse>) => r.body as WorkflowFormListApiResponse)
    );
  }

  /**
   * Path part for operation workflowFormsGetByWorkflowId
   */
  static readonly WorkflowFormsGetByWorkflowIdPath = '/api/WorkflowForms/{workflowId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsGetByWorkflowId$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetByWorkflowId$Plain$Response(params: {
    workflowId: number;
  }): Observable<StrictHttpResponse<WorkflowFormApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsGetByWorkflowIdPath, 'get');
    if (params) {
      rb.path('workflowId', params.workflowId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsGetByWorkflowId$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetByWorkflowId$Plain(params: {
    workflowId: number;
  }): Observable<WorkflowFormApiResponse> {

    return this.workflowFormsGetByWorkflowId$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormApiResponse>) => r.body as WorkflowFormApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsGetByWorkflowId$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetByWorkflowId$Json$Response(params: {
    workflowId: number;
  }): Observable<StrictHttpResponse<WorkflowFormApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsGetByWorkflowIdPath, 'get');
    if (params) {
      rb.path('workflowId', params.workflowId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsGetByWorkflowId$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsGetByWorkflowId$Json(params: {
    workflowId: number;
  }): Observable<WorkflowFormApiResponse> {

    return this.workflowFormsGetByWorkflowId$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormApiResponse>) => r.body as WorkflowFormApiResponse)
    );
  }

  /**
   * Path part for operation workflowFormsDeleteByWorkflowId
   */
  static readonly WorkflowFormsDeleteByWorkflowIdPath = '/api/WorkflowForms/{workflowId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsDeleteByWorkflowId$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsDeleteByWorkflowId$Plain$Response(params: {
    workflowId: number;
  }): Observable<StrictHttpResponse<WorkflowFormApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsDeleteByWorkflowIdPath, 'delete');
    if (params) {
      rb.path('workflowId', params.workflowId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsDeleteByWorkflowId$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsDeleteByWorkflowId$Plain(params: {
    workflowId: number;
  }): Observable<WorkflowFormApiResponse> {

    return this.workflowFormsDeleteByWorkflowId$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormApiResponse>) => r.body as WorkflowFormApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowFormsDeleteByWorkflowId$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsDeleteByWorkflowId$Json$Response(params: {
    workflowId: number;
  }): Observable<StrictHttpResponse<WorkflowFormApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowFormsService.WorkflowFormsDeleteByWorkflowIdPath, 'delete');
    if (params) {
      rb.path('workflowId', params.workflowId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowFormApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowFormsDeleteByWorkflowId$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowFormsDeleteByWorkflowId$Json(params: {
    workflowId: number;
  }): Observable<WorkflowFormApiResponse> {

    return this.workflowFormsDeleteByWorkflowId$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowFormApiResponse>) => r.body as WorkflowFormApiResponse)
    );
  }

}
