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

import { Workflow } from '../models/workflow';
import { WorkflowApiResponse } from '../models/workflow-api-response';
import { WorkflowListApiResponse } from '../models/workflow-list-api-response';

@Injectable({
  providedIn: 'root',
})
export class WorkflowService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation workflowGetAllWorkflows
   */
  static readonly WorkflowGetAllWorkflowsPath = '/api/Workflow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowGetAllWorkflows$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetAllWorkflows$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowGetAllWorkflowsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowGetAllWorkflows$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetAllWorkflows$Plain(params?: {
  }): Observable<WorkflowListApiResponse> {

    return this.workflowGetAllWorkflows$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowGetAllWorkflows$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetAllWorkflows$Json$Response(params?: {
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowGetAllWorkflowsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowGetAllWorkflows$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetAllWorkflows$Json(params?: {
  }): Observable<WorkflowListApiResponse> {

    return this.workflowGetAllWorkflows$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * Path part for operation workflowCreateWorkflow
   */
  static readonly WorkflowCreateWorkflowPath = '/api/Workflow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowCreateWorkflow$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowCreateWorkflow$Plain$Response(params?: {
    body?: Workflow
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowCreateWorkflowPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowCreateWorkflow$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowCreateWorkflow$Plain(params?: {
    body?: Workflow
  }): Observable<WorkflowListApiResponse> {

    return this.workflowCreateWorkflow$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowCreateWorkflow$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowCreateWorkflow$Json$Response(params?: {
    body?: Workflow
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowCreateWorkflowPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowCreateWorkflow$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowCreateWorkflow$Json(params?: {
    body?: Workflow
  }): Observable<WorkflowListApiResponse> {

    return this.workflowCreateWorkflow$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * Path part for operation workflowGetById
   */
  static readonly WorkflowGetByIdPath = '/api/Workflow/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowGetById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<WorkflowApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowGetById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetById$Plain(params: {
    id: number;
  }): Observable<WorkflowApiResponse> {

    return this.workflowGetById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowApiResponse>) => r.body as WorkflowApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowGetById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<WorkflowApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowGetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowGetById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetById$Json(params: {
    id: number;
  }): Observable<WorkflowApiResponse> {

    return this.workflowGetById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowApiResponse>) => r.body as WorkflowApiResponse)
    );
  }

  /**
   * Path part for operation workflowUpdateWorkflow
   */
  static readonly WorkflowUpdateWorkflowPath = '/api/Workflow/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowUpdateWorkflow$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowUpdateWorkflow$Plain$Response(params: {
    id: number;
    body?: Workflow
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowUpdateWorkflowPath, 'put');
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
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowUpdateWorkflow$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowUpdateWorkflow$Plain(params: {
    id: number;
    body?: Workflow
  }): Observable<WorkflowListApiResponse> {

    return this.workflowUpdateWorkflow$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowUpdateWorkflow$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowUpdateWorkflow$Json$Response(params: {
    id: number;
    body?: Workflow
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowUpdateWorkflowPath, 'put');
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
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowUpdateWorkflow$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  workflowUpdateWorkflow$Json(params: {
    id: number;
    body?: Workflow
  }): Observable<WorkflowListApiResponse> {

    return this.workflowUpdateWorkflow$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * Path part for operation workflowDeleteById
   */
  static readonly WorkflowDeleteByIdPath = '/api/Workflow/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowDeleteById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowDeleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowDeleteById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteById$Plain(params: {
    id: number;
  }): Observable<WorkflowListApiResponse> {

    return this.workflowDeleteById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowDeleteById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowDeleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowDeleteById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteById$Json(params: {
    id: number;
  }): Observable<WorkflowListApiResponse> {

    return this.workflowDeleteById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * Path part for operation workflowGetByBankId
   */
  static readonly WorkflowGetByBankIdPath = '/api/Workflow/{bankId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowGetByBankId$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetByBankId$Plain$Response(params: {
    bankId: number;
  }): Observable<StrictHttpResponse<WorkflowApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowGetByBankIdPath, 'get');
    if (params) {
      rb.path('bankId', params.bankId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowGetByBankId$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetByBankId$Plain(params: {
    bankId: number;
  }): Observable<WorkflowApiResponse> {

    return this.workflowGetByBankId$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowApiResponse>) => r.body as WorkflowApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowGetByBankId$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetByBankId$Json$Response(params: {
    bankId: number;
  }): Observable<StrictHttpResponse<WorkflowApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowGetByBankIdPath, 'get');
    if (params) {
      rb.path('bankId', params.bankId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowGetByBankId$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetByBankId$Json(params: {
    bankId: number;
  }): Observable<WorkflowApiResponse> {

    return this.workflowGetByBankId$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowApiResponse>) => r.body as WorkflowApiResponse)
    );
  }

  /**
   * Path part for operation workflowDeleteByBankId
   */
  static readonly WorkflowDeleteByBankIdPath = '/api/Workflow/{bankId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowDeleteByBankId$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteByBankId$Plain$Response(params: {
    bankId: number;
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowDeleteByBankIdPath, 'delete');
    if (params) {
      rb.path('bankId', params.bankId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowDeleteByBankId$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteByBankId$Plain(params: {
    bankId: number;
  }): Observable<WorkflowListApiResponse> {

    return this.workflowDeleteByBankId$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowDeleteByBankId$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteByBankId$Json$Response(params: {
    bankId: number;
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowDeleteByBankIdPath, 'delete');
    if (params) {
      rb.path('bankId', params.bankId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowDeleteByBankId$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteByBankId$Json(params: {
    bankId: number;
  }): Observable<WorkflowListApiResponse> {

    return this.workflowDeleteByBankId$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * Path part for operation workflowGetByMstWorkflowId
   */
  static readonly WorkflowGetByMstWorkflowIdPath = '/api/Workflow/{workflowMstId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowGetByMstWorkflowId$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetByMstWorkflowId$Plain$Response(params: {
    workflowMstId: number;
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowGetByMstWorkflowIdPath, 'get');
    if (params) {
      rb.path('workflowMstId', params.workflowMstId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowGetByMstWorkflowId$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetByMstWorkflowId$Plain(params: {
    workflowMstId: number;
  }): Observable<WorkflowListApiResponse> {

    return this.workflowGetByMstWorkflowId$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowGetByMstWorkflowId$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetByMstWorkflowId$Json$Response(params: {
    workflowMstId: number;
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowGetByMstWorkflowIdPath, 'get');
    if (params) {
      rb.path('workflowMstId', params.workflowMstId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowGetByMstWorkflowId$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowGetByMstWorkflowId$Json(params: {
    workflowMstId: number;
  }): Observable<WorkflowListApiResponse> {

    return this.workflowGetByMstWorkflowId$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * Path part for operation workflowDeleteByMstWorkflowId
   */
  static readonly WorkflowDeleteByMstWorkflowIdPath = '/api/Workflow/{mstWorkflowId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowDeleteByMstWorkflowId$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteByMstWorkflowId$Plain$Response(params: {
    mstWorkflowId: number;
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowDeleteByMstWorkflowIdPath, 'delete');
    if (params) {
      rb.path('mstWorkflowId', params.mstWorkflowId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowDeleteByMstWorkflowId$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteByMstWorkflowId$Plain(params: {
    mstWorkflowId: number;
  }): Observable<WorkflowListApiResponse> {

    return this.workflowDeleteByMstWorkflowId$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowDeleteByMstWorkflowId$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteByMstWorkflowId$Json$Response(params: {
    mstWorkflowId: number;
  }): Observable<StrictHttpResponse<WorkflowListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WorkflowService.WorkflowDeleteByMstWorkflowIdPath, 'delete');
    if (params) {
      rb.path('mstWorkflowId', params.mstWorkflowId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkflowListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `workflowDeleteByMstWorkflowId$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowDeleteByMstWorkflowId$Json(params: {
    mstWorkflowId: number;
  }): Observable<WorkflowListApiResponse> {

    return this.workflowDeleteByMstWorkflowId$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WorkflowListApiResponse>) => r.body as WorkflowListApiResponse)
    );
  }

}
