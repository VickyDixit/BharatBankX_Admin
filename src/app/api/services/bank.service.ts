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

import { Bank } from '../models/bank';
import { BankApiResponse } from '../models/bank-api-response';
import { BankListApiResponse } from '../models/bank-list-api-response';

@Injectable({
  providedIn: 'root',
})
export class BankService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation bankGetAllBanks
   */
  static readonly BankGetAllBanksPath = '/api/Bank';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bankGetAllBanks$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankGetAllBanks$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<BankListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BankService.BankGetAllBanksPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BankListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bankGetAllBanks$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankGetAllBanks$Plain(params?: {
  }): Observable<BankListApiResponse> {

    return this.bankGetAllBanks$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BankListApiResponse>) => r.body as BankListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bankGetAllBanks$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankGetAllBanks$Json$Response(params?: {
  }): Observable<StrictHttpResponse<BankListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BankService.BankGetAllBanksPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BankListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bankGetAllBanks$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankGetAllBanks$Json(params?: {
  }): Observable<BankListApiResponse> {

    return this.bankGetAllBanks$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BankListApiResponse>) => r.body as BankListApiResponse)
    );
  }

  /**
   * Path part for operation bankCreateBank
   */
  static readonly BankCreateBankPath = '/api/Bank';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bankCreateBank$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  bankCreateBank$Plain$Response(params?: {
    body?: Bank
  }): Observable<StrictHttpResponse<BankListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BankService.BankCreateBankPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BankListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bankCreateBank$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  bankCreateBank$Plain(params?: {
    body?: Bank
  }): Observable<BankListApiResponse> {

    return this.bankCreateBank$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BankListApiResponse>) => r.body as BankListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bankCreateBank$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  bankCreateBank$Json$Response(params?: {
    body?: Bank
  }): Observable<StrictHttpResponse<BankListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BankService.BankCreateBankPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BankListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bankCreateBank$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  bankCreateBank$Json(params?: {
    body?: Bank
  }): Observable<BankListApiResponse> {

    return this.bankCreateBank$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BankListApiResponse>) => r.body as BankListApiResponse)
    );
  }

  /**
   * Path part for operation bankGetBankById
   */
  static readonly BankGetBankByIdPath = '/api/Bank/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bankGetBankById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankGetBankById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<BankApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BankService.BankGetBankByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BankApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bankGetBankById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankGetBankById$Plain(params: {
    id: number;
  }): Observable<BankApiResponse> {

    return this.bankGetBankById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BankApiResponse>) => r.body as BankApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bankGetBankById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankGetBankById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<BankApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BankService.BankGetBankByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BankApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bankGetBankById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankGetBankById$Json(params: {
    id: number;
  }): Observable<BankApiResponse> {

    return this.bankGetBankById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BankApiResponse>) => r.body as BankApiResponse)
    );
  }

  /**
   * Path part for operation bankUpdateBank
   */
  static readonly BankUpdateBankPath = '/api/Bank/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bankUpdateBank$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  bankUpdateBank$Plain$Response(params: {
    id: number;
    body?: Bank
  }): Observable<StrictHttpResponse<BankApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BankService.BankUpdateBankPath, 'put');
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
        return r as StrictHttpResponse<BankApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bankUpdateBank$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  bankUpdateBank$Plain(params: {
    id: number;
    body?: Bank
  }): Observable<BankApiResponse> {

    return this.bankUpdateBank$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BankApiResponse>) => r.body as BankApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bankUpdateBank$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  bankUpdateBank$Json$Response(params: {
    id: number;
    body?: Bank
  }): Observable<StrictHttpResponse<BankApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BankService.BankUpdateBankPath, 'put');
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
        return r as StrictHttpResponse<BankApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bankUpdateBank$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  bankUpdateBank$Json(params: {
    id: number;
    body?: Bank
  }): Observable<BankApiResponse> {

    return this.bankUpdateBank$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BankApiResponse>) => r.body as BankApiResponse)
    );
  }

  /**
   * Path part for operation bankDeleteBank
   */
  static readonly BankDeleteBankPath = '/api/Bank/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bankDeleteBank$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankDeleteBank$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<BankListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BankService.BankDeleteBankPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BankListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bankDeleteBank$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankDeleteBank$Plain(params: {
    id: number;
  }): Observable<BankListApiResponse> {

    return this.bankDeleteBank$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BankListApiResponse>) => r.body as BankListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bankDeleteBank$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankDeleteBank$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<BankListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, BankService.BankDeleteBankPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BankListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bankDeleteBank$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bankDeleteBank$Json(params: {
    id: number;
  }): Observable<BankListApiResponse> {

    return this.bankDeleteBank$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BankListApiResponse>) => r.body as BankListApiResponse)
    );
  }

}
