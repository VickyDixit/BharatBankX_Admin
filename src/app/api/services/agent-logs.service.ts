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

import { AgentLog } from '../models/agent-log';
import { AgentLogApiResponse } from '../models/agent-log-api-response';
import { AgentLogListApiResponse } from '../models/agent-log-list-api-response';

@Injectable({
  providedIn: 'root',
})
export class AgentLogsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation agentLogsGetAllLogs
   */
  static readonly AgentLogsGetAllLogsPath = '/api/AgentLogs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentLogsGetAllLogs$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentLogsGetAllLogs$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<AgentLogListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentLogsService.AgentLogsGetAllLogsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentLogListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentLogsGetAllLogs$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentLogsGetAllLogs$Plain(params?: {
  }): Observable<AgentLogListApiResponse> {

    return this.agentLogsGetAllLogs$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AgentLogListApiResponse>) => r.body as AgentLogListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentLogsGetAllLogs$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentLogsGetAllLogs$Json$Response(params?: {
  }): Observable<StrictHttpResponse<AgentLogListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentLogsService.AgentLogsGetAllLogsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentLogListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentLogsGetAllLogs$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentLogsGetAllLogs$Json(params?: {
  }): Observable<AgentLogListApiResponse> {

    return this.agentLogsGetAllLogs$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AgentLogListApiResponse>) => r.body as AgentLogListApiResponse)
    );
  }

  /**
   * Path part for operation agentLogsCreateLog
   */
  static readonly AgentLogsCreateLogPath = '/api/AgentLogs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentLogsCreateLog()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentLogsCreateLog$Response(params?: {
    body?: AgentLog
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AgentLogsService.AgentLogsCreateLogPath, 'post');
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
   * To access the full response (for headers, for example), `agentLogsCreateLog$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentLogsCreateLog(params?: {
    body?: AgentLog
  }): Observable<void> {

    return this.agentLogsCreateLog$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation agentLogsGetLogsByAgent
   */
  static readonly AgentLogsGetLogsByAgentPath = '/api/AgentLogs/agent/{agentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentLogsGetLogsByAgent$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentLogsGetLogsByAgent$Plain$Response(params: {
    agentId: number;
  }): Observable<StrictHttpResponse<AgentLogApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentLogsService.AgentLogsGetLogsByAgentPath, 'get');
    if (params) {
      rb.path('agentId', params.agentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentLogApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentLogsGetLogsByAgent$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentLogsGetLogsByAgent$Plain(params: {
    agentId: number;
  }): Observable<AgentLogApiResponse> {

    return this.agentLogsGetLogsByAgent$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AgentLogApiResponse>) => r.body as AgentLogApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentLogsGetLogsByAgent$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentLogsGetLogsByAgent$Json$Response(params: {
    agentId: number;
  }): Observable<StrictHttpResponse<AgentLogApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentLogsService.AgentLogsGetLogsByAgentPath, 'get');
    if (params) {
      rb.path('agentId', params.agentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentLogApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentLogsGetLogsByAgent$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentLogsGetLogsByAgent$Json(params: {
    agentId: number;
  }): Observable<AgentLogApiResponse> {

    return this.agentLogsGetLogsByAgent$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AgentLogApiResponse>) => r.body as AgentLogApiResponse)
    );
  }

}
