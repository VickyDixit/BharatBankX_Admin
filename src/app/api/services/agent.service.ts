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

import { Agent } from '../models/agent';
import { AgentApiResponse } from '../models/agent-api-response';
import { AgentListApiResponse } from '../models/agent-list-api-response';
import { UpdateProfileRequest } from '../models/update-profile-request';

@Injectable({
  providedIn: 'root',
})
export class AgentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation agentGetAllAgents
   */
  static readonly AgentGetAllAgentsPath = '/api/Agent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentGetAllAgents$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetAllAgents$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<AgentListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentGetAllAgentsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentGetAllAgents$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetAllAgents$Plain(params?: {
  }): Observable<AgentListApiResponse> {

    return this.agentGetAllAgents$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AgentListApiResponse>) => r.body as AgentListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentGetAllAgents$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetAllAgents$Json$Response(params?: {
  }): Observable<StrictHttpResponse<AgentListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentGetAllAgentsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentGetAllAgents$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetAllAgents$Json(params?: {
  }): Observable<AgentListApiResponse> {

    return this.agentGetAllAgents$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AgentListApiResponse>) => r.body as AgentListApiResponse)
    );
  }

  /**
   * Path part for operation agentCreateAgent
   */
  static readonly AgentCreateAgentPath = '/api/Agent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentCreateAgent$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentCreateAgent$Plain$Response(params?: {
    body?: Agent
  }): Observable<StrictHttpResponse<AgentListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentCreateAgentPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentCreateAgent$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentCreateAgent$Plain(params?: {
    body?: Agent
  }): Observable<AgentListApiResponse> {

    return this.agentCreateAgent$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AgentListApiResponse>) => r.body as AgentListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentCreateAgent$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentCreateAgent$Json$Response(params?: {
    body?: Agent
  }): Observable<StrictHttpResponse<AgentListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentCreateAgentPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentCreateAgent$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentCreateAgent$Json(params?: {
    body?: Agent
  }): Observable<AgentListApiResponse> {

    return this.agentCreateAgent$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AgentListApiResponse>) => r.body as AgentListApiResponse)
    );
  }

  /**
   * Path part for operation agentGetAgentById
   */
  static readonly AgentGetAgentByIdPath = '/api/Agent/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentGetAgentById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetAgentById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<AgentApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentGetAgentByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentGetAgentById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetAgentById$Plain(params: {
    id: number;
  }): Observable<AgentApiResponse> {

    return this.agentGetAgentById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AgentApiResponse>) => r.body as AgentApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentGetAgentById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetAgentById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<AgentApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentGetAgentByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentGetAgentById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetAgentById$Json(params: {
    id: number;
  }): Observable<AgentApiResponse> {

    return this.agentGetAgentById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AgentApiResponse>) => r.body as AgentApiResponse)
    );
  }

  /**
   * Path part for operation agentUpdateAgent
   */
  static readonly AgentUpdateAgentPath = '/api/Agent/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentUpdateAgent$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentUpdateAgent$Plain$Response(params: {
    id: number;
    body?: Agent
  }): Observable<StrictHttpResponse<AgentApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentUpdateAgentPath, 'put');
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
        return r as StrictHttpResponse<AgentApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentUpdateAgent$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentUpdateAgent$Plain(params: {
    id: number;
    body?: Agent
  }): Observable<AgentApiResponse> {

    return this.agentUpdateAgent$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AgentApiResponse>) => r.body as AgentApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentUpdateAgent$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentUpdateAgent$Json$Response(params: {
    id: number;
    body?: Agent
  }): Observable<StrictHttpResponse<AgentApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentUpdateAgentPath, 'put');
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
        return r as StrictHttpResponse<AgentApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentUpdateAgent$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentUpdateAgent$Json(params: {
    id: number;
    body?: Agent
  }): Observable<AgentApiResponse> {

    return this.agentUpdateAgent$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AgentApiResponse>) => r.body as AgentApiResponse)
    );
  }

  /**
   * Path part for operation agentDeleteAgent
   */
  static readonly AgentDeleteAgentPath = '/api/Agent/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentDeleteAgent$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentDeleteAgent$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<AgentApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentDeleteAgentPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentDeleteAgent$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentDeleteAgent$Plain(params: {
    id: number;
  }): Observable<AgentApiResponse> {

    return this.agentDeleteAgent$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AgentApiResponse>) => r.body as AgentApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentDeleteAgent$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentDeleteAgent$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<AgentApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentDeleteAgentPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentDeleteAgent$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentDeleteAgent$Json(params: {
    id: number;
  }): Observable<AgentApiResponse> {

    return this.agentDeleteAgent$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AgentApiResponse>) => r.body as AgentApiResponse)
    );
  }

  /**
   * Path part for operation agentGetByUsername
   */
  static readonly AgentGetByUsernamePath = '/api/Agent/by-username/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentGetByUsername$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetByUsername$Plain$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<AgentApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentGetByUsernamePath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentGetByUsername$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetByUsername$Plain(params: {
    username: string;
  }): Observable<AgentApiResponse> {

    return this.agentGetByUsername$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AgentApiResponse>) => r.body as AgentApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentGetByUsername$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetByUsername$Json$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<AgentApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentGetByUsernamePath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgentApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentGetByUsername$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agentGetByUsername$Json(params: {
    username: string;
  }): Observable<AgentApiResponse> {

    return this.agentGetByUsername$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AgentApiResponse>) => r.body as AgentApiResponse)
    );
  }

  /**
   * Path part for operation agentUpdateProfile
   */
  static readonly AgentUpdateProfilePath = '/api/Agent/{id}/update-profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentUpdateProfile$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentUpdateProfile$Plain$Response(params: {
    id: number;
    body?: UpdateProfileRequest
  }): Observable<StrictHttpResponse<AgentApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentUpdateProfilePath, 'put');
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
        return r as StrictHttpResponse<AgentApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentUpdateProfile$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentUpdateProfile$Plain(params: {
    id: number;
    body?: UpdateProfileRequest
  }): Observable<AgentApiResponse> {

    return this.agentUpdateProfile$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AgentApiResponse>) => r.body as AgentApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentUpdateProfile$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentUpdateProfile$Json$Response(params: {
    id: number;
    body?: UpdateProfileRequest
  }): Observable<StrictHttpResponse<AgentApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentUpdateProfilePath, 'put');
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
        return r as StrictHttpResponse<AgentApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentUpdateProfile$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  agentUpdateProfile$Json(params: {
    id: number;
    body?: UpdateProfileRequest
  }): Observable<AgentApiResponse> {

    return this.agentUpdateProfile$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AgentApiResponse>) => r.body as AgentApiResponse)
    );
  }

}
