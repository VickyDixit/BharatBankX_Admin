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

import { DeviceLock } from '../models/device-lock';
import { DeviceLockApiResponse } from '../models/device-lock-api-response';
import { DeviceLockListApiResponse } from '../models/device-lock-list-api-response';

@Injectable({
  providedIn: 'root',
})
export class DeviceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation deviceGetAllDevices
   */
  static readonly DeviceGetAllDevicesPath = '/api/Device';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceGetAllDevices$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGetAllDevices$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<DeviceLockListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceGetAllDevicesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceLockListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceGetAllDevices$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGetAllDevices$Plain(params?: {
  }): Observable<DeviceLockListApiResponse> {

    return this.deviceGetAllDevices$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceLockListApiResponse>) => r.body as DeviceLockListApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceGetAllDevices$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGetAllDevices$Json$Response(params?: {
  }): Observable<StrictHttpResponse<DeviceLockListApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceGetAllDevicesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceLockListApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceGetAllDevices$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGetAllDevices$Json(params?: {
  }): Observable<DeviceLockListApiResponse> {

    return this.deviceGetAllDevices$Json$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceLockListApiResponse>) => r.body as DeviceLockListApiResponse)
    );
  }

  /**
   * Path part for operation deviceCreateDevice
   */
  static readonly DeviceCreateDevicePath = '/api/Device';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceCreateDevice$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceCreateDevice$Plain$Response(params?: {
    body?: DeviceLock
  }): Observable<StrictHttpResponse<DeviceLockApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceCreateDevicePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceLockApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceCreateDevice$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceCreateDevice$Plain(params?: {
    body?: DeviceLock
  }): Observable<DeviceLockApiResponse> {

    return this.deviceCreateDevice$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceLockApiResponse>) => r.body as DeviceLockApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceCreateDevice$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceCreateDevice$Json$Response(params?: {
    body?: DeviceLock
  }): Observable<StrictHttpResponse<DeviceLockApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceCreateDevicePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceLockApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceCreateDevice$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceCreateDevice$Json(params?: {
    body?: DeviceLock
  }): Observable<DeviceLockApiResponse> {

    return this.deviceCreateDevice$Json$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceLockApiResponse>) => r.body as DeviceLockApiResponse)
    );
  }

  /**
   * Path part for operation deviceGetDeviceById
   */
  static readonly DeviceGetDeviceByIdPath = '/api/Device/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceGetDeviceById$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGetDeviceById$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<DeviceLockApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceGetDeviceByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceLockApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceGetDeviceById$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGetDeviceById$Plain(params: {
    id: number;
  }): Observable<DeviceLockApiResponse> {

    return this.deviceGetDeviceById$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceLockApiResponse>) => r.body as DeviceLockApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceGetDeviceById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGetDeviceById$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<DeviceLockApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceGetDeviceByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceLockApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceGetDeviceById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGetDeviceById$Json(params: {
    id: number;
  }): Observable<DeviceLockApiResponse> {

    return this.deviceGetDeviceById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceLockApiResponse>) => r.body as DeviceLockApiResponse)
    );
  }

  /**
   * Path part for operation deviceUpdateDevice
   */
  static readonly DeviceUpdateDevicePath = '/api/Device/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceUpdateDevice$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceUpdateDevice$Plain$Response(params: {
    id: number;
    body?: DeviceLock
  }): Observable<StrictHttpResponse<DeviceLockApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceUpdateDevicePath, 'put');
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
        return r as StrictHttpResponse<DeviceLockApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceUpdateDevice$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceUpdateDevice$Plain(params: {
    id: number;
    body?: DeviceLock
  }): Observable<DeviceLockApiResponse> {

    return this.deviceUpdateDevice$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceLockApiResponse>) => r.body as DeviceLockApiResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceUpdateDevice$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceUpdateDevice$Json$Response(params: {
    id: number;
    body?: DeviceLock
  }): Observable<StrictHttpResponse<DeviceLockApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceUpdateDevicePath, 'put');
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
        return r as StrictHttpResponse<DeviceLockApiResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceUpdateDevice$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceUpdateDevice$Json(params: {
    id: number;
    body?: DeviceLock
  }): Observable<DeviceLockApiResponse> {

    return this.deviceUpdateDevice$Json$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceLockApiResponse>) => r.body as DeviceLockApiResponse)
    );
  }

  /**
   * Path part for operation deviceDeleteDevice
   */
  static readonly DeviceDeleteDevicePath = '/api/Device/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceDeleteDevice()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceDeleteDevice$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceDeleteDevicePath, 'delete');
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
   * To access the full response (for headers, for example), `deviceDeleteDevice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceDeleteDevice(params: {
    id: number;
  }): Observable<void> {

    return this.deviceDeleteDevice$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
