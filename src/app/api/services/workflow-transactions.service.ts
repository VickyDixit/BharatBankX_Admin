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

import { WorkflowTransaction } from '../models/workflow-transaction';
import { WorkflowTransactionApiResponse } from '../models/workflow-transaction-api-response';
import { WorkflowTransactionListApiResponse } from '../models/workflow-transaction-list-api-response';

@Injectable({
  providedIn: 'root',
})
export class WorkflowTransactionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation workflowTransactionsGetAll
   */
  static readonly WorkflowTransactionsGetAllPath = '/api/workflow-transactions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowTransactionsGetAll$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetAll$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<WorkflowTransactionListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowTransactionsService.WorkflowTransactionsGetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowTransactionListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowTransactionsGetAll$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetAll$Plain(params?: {
  }): Observable<WorkflowTransactionListApiResponse> {

    return this.workflowTransactionsGetAll$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowTransactionListApiResponse>) => r.body as WorkflowTransactionListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowTransactionsGetAll$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetAll$Json$Response(params?: {
  }): Observable<StrictHttpResponse<WorkflowTransactionListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowTransactionsService.WorkflowTransactionsGetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowTransactionListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowTransactionsGetAll$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetAll$Json(params?: {
  }): Observable<WorkflowTransactionListApiResponse> {

    return this.workflowTransactionsGetAll$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowTransactionListApiResponse>) => r.body as WorkflowTransactionListApiResponse)
    );
  }

  /**
   * Path part for operation workflowTransactionsCreate
   */
  static readonly WorkflowTransactionsCreatePath = '/api/workflow-transactions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowTransactionsCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowTransactionsCreate$Response(params?: {
    body?: WorkflowTransaction
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowTransactionsService.WorkflowTransactionsCreatePath, 'post');
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
   * To access the full response (for headers, for example), `workflowTransactionsCreate$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowTransactionsCreate(params?: {
    body?: WorkflowTransaction
  }): Observable<void> {

    return this.workflowTransactionsCreate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation workflowTransactionsGetById
   */
  static readonly WorkflowTransactionsGetByIdPath = '/api/workflow-transactions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowTransactionsGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<WorkflowTransactionApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowTransactionsService.WorkflowTransactionsGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowTransactionApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowTransactionsGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetById$Plain(params: {
    id: number;
  }): Observable<WorkflowTransactionApiResponse> {

    return this.workflowTransactionsGetById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowTransactionApiResponse>) => r.body as WorkflowTransactionApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowTransactionsGetById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<WorkflowTransactionApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowTransactionsService.WorkflowTransactionsGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowTransactionApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowTransactionsGetById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetById$Json(params: {
    id: number;
  }): Observable<WorkflowTransactionApiResponse> {

    return this.workflowTransactionsGetById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowTransactionApiResponse>) => r.body as WorkflowTransactionApiResponse)
    );
  }

  /**
   * Path part for operation workflowTransactionsDelete
   */
  static readonly WorkflowTransactionsDeletePath = '/api/workflow-transactions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowTransactionsDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowTransactionsService.WorkflowTransactionsDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `workflowTransactionsDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsDelete(params: {
    id: number;
  }): Observable<void> {

    return this.workflowTransactionsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation workflowTransactionsGetByAgent
   */
  static readonly WorkflowTransactionsGetByAgentPath = '/api/workflow-transactions/agent/{agentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowTransactionsGetByAgent$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetByAgent$Plain$Response(params: {
    agentId: number;
  }): Observable<StrictHttpResponse<WorkflowTransactionListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowTransactionsService.WorkflowTransactionsGetByAgentPath, 'get');
    if (params) {
      rb.path('agentId', params.agentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowTransactionListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowTransactionsGetByAgent$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetByAgent$Plain(params: {
    agentId: number;
  }): Observable<WorkflowTransactionListApiResponse> {

    return this.workflowTransactionsGetByAgent$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowTransactionListApiResponse>) => r.body as WorkflowTransactionListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowTransactionsGetByAgent$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetByAgent$Json$Response(params: {
    agentId: number;
  }): Observable<StrictHttpResponse<WorkflowTransactionListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowTransactionsService.WorkflowTransactionsGetByAgentPath, 'get');
    if (params) {
      rb.path('agentId', params.agentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowTransactionListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowTransactionsGetByAgent$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsGetByAgent$Json(params: {
    agentId: number;
  }): Observable<WorkflowTransactionListApiResponse> {

    return this.workflowTransactionsGetByAgent$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowTransactionListApiResponse>) => r.body as WorkflowTransactionListApiResponse)
    );
  }

  /**
   * Path part for operation workflowTransactionsUpdateStatus
   */
  static readonly WorkflowTransactionsUpdateStatusPath = '/api/workflow-transactions/{id}/status';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowTransactionsUpdateStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsUpdateStatus$Response(params: {
    id: number;
    status?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowTransactionsService.WorkflowTransactionsUpdateStatusPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('status', params.status, {});
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
   * To access the full response (for headers, for example), `workflowTransactionsUpdateStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowTransactionsUpdateStatus(params: {
    id: number;
    status?: string;
  }): Observable<void> {

    return this.workflowTransactionsUpdateStatus$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
