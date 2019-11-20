import { HttpClient, HttpErrorResponse, HttpHeaders, HttpProgressEvent, HttpSentEvent, HttpResponse, HttpEvent, HttpUploadProgressEvent, HttpDownloadProgressEvent, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize, timeout, map,  } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '@app/models/api';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public apiUrl: string = environment.apiCore;
  public apiTimeout = 10000;
  private requestSubject: BehaviorSubject<string> = new BehaviorSubject(null);
  private errorSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
  }
  get $request() {
    return this.requestSubject.asObservable();
  }
  get $error() {
    return this.errorSubject.asObservable();
  }

  static setFormMultipart(headers?: HttpHeaders) {
    if (!headers) { headers = new HttpHeaders(); }
    return headers.set('Content-Type', `multipart/form-data;`);
  }

  request(method: string, url: string, options?: object) {
    this.requestSubject.next('Sending request');
    return this.http.request(method, url, options).pipe(
      timeout(this.apiTimeout),
      catchError(this.handleError),
      finalize(() => this.endRequest())
    )
  }

  'post'(url: string, data: object, options?: object): Observable<any> {
    this.requestSubject.next('Saving data');
    return this.http.post(this.apiUrl + url, data, options)
      .pipe(
        timeout(this.apiTimeout),
        map((response: ApiResponse) => {
          if (response.status === 1) {
            return response.data;
          } else {
            throw new HttpErrorResponse({error: response.errors, status: response.status});
          }
        }),
        catchError(this.handleError),
        finalize(() => this.endRequest())
      );
  }
  'upload'(url: string, file: File, method='POST', showLoader = false, options?: object): Observable<any> {
    if (showLoader) {
      this.requestSubject.next('Saving data');
    }
    const formData = new FormData();
    formData.append('type', 'document');
    formData.append('original_name', file.name);
    formData.append('file', file, file.name);
    return this.http.request(method, this.apiUrl + url, {
      body: formData,
      reportProgress: true,
      observe: 'events',
      responseType: 'json',
      ...options
    }).pipe(
      map((response: any) => {
        if (response.type === 1) {
          return response as HttpUploadProgressEvent;
        } else if (response.type === 2) {
          return response as HttpHeaderResponse;
        } else if (response.type === 3) {
          return response as HttpDownloadProgressEvent;
        } else if (response.type === 4 && response instanceof HttpResponse) {
          if (response.status === 200 && response.body.status === 1) {
            return response.body.data;
          } else {
            throw new HttpErrorResponse({error: response.body.errors, status: response.body.status});
          }
        } else {
          return response;
        }
      }),
      catchError(this.handleError),
      finalize(() => this.endRequest())
    );
  }
  'postForm'(url: string, data: object, showLoader = false, options?: object): Observable<any> {
    if (showLoader) {
      this.requestSubject.next('Saving data');
    }
    const formData = this.obj2formData(data);
    return this.http.post(this.apiUrl + url, formData, {
      reportProgress: true,
      observe: 'events',
      ...options
    }).pipe(
      map((response: any) => {
        if (response.status === 1) {
          return response.data;
        } else {
          throw new HttpErrorResponse({error: response.errors, status: response.status});
        }
      }),
      catchError(this.handleError),
      finalize(() => this.endRequest())
    );
  }
  'get'(url: string, options?: any, requestTimeout?: number): Observable<any> {
    return this.http.get<Object>(this.apiUrl + url, {
      responseType: 'json',
      ...options
    })
      .pipe(
        timeout(requestTimeout || this.apiTimeout),
        map((response: any) => {
          if (response.status === 1 || response.success === true) {
            return response.data;
          } else if (!response.status) {
            return response;
          } else {
            throw new HttpErrorResponse({error: response.errors, status: response.status});
          }
        }),
        catchError((error) => this.handleError(error)),
        finalize(() => this.endRequest())
      );
  }
  'getFile'(url: string, options?, requestTimeout = this.apiTimeout): any {
    return this.http.get(this.apiUrl + url, {
      observe: 'body',
      responseType: 'blob',
      ...options
    }).pipe(
      timeout(requestTimeout),
      catchError((error) => this.handleError(error)),
      finalize(() => this.endRequest())
    );
  }
  'put'(url: string, data: object, options?: object): Observable<any> {
    this.requestSubject.next('Updating data');
    return this.http.put(this.apiUrl + url, data, options)
      .pipe(
        timeout(this.apiTimeout),
        map((response: ApiResponse) => {
          if (response.status === 1) {
            return response.data;
          } else {
            throw new HttpErrorResponse({error: response.errors, status: response.status});
          }
        }),
        catchError(this.handleError),
        finalize(() => this.endRequest())
      );
  }
  'putForm'(url: string, data: object, options?: object): Observable<any> {
    this.requestSubject.next('Updating data');
    const formData = this.obj2formData(data);
    return this.http.put(this.apiUrl + url, formData, {
      reportProgress: true,
      observe: 'events',
      ...options
    }).pipe(
      map((response: any) => {
        if (response.status === 1) {
          return response.data;
        } else {
          throw new HttpErrorResponse({error: response.errors, status: response.status});
        }
      }),
      catchError(this.handleError),
      finalize(() => this.endRequest())
    );
  }
  'delete'(url: string, options?: object): Observable<any> {
    this.requestSubject.next('Deleting data');
    return this.http.delete(this.apiUrl + url, options).pipe(
      timeout(this.apiTimeout),
      catchError(this.handleError),
      finalize(() => this.endRequest())
    );
  }


  private obj2formData(data: object) {
    const form = new FormData();
    Object.keys(data).forEach((name) => {
      if (typeof data[name] !== 'string') {
        if (data[name]) {
          if (data[name].type && data[name].type === 'upload') {
            data[name] = data[name].file;
          } else {
            data[name] = JSON.stringify(data[name]);
          }
        }
      }
      form.append(name, data[name]);
    });
    return form;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.

    } else {
      let shouldThrow = true;
      if (!this.errorSubject) { this.errorSubject = new BehaviorSubject(null); }
      if (error.status === 0) {
        this.errorSubject.next(`Backend is down`);
      } else if (error.status === 400) {
        return throwError(error.error)
      } else if (error.status === 404) {
        // return throwError(error);
        this.errorSubject.next(`Not found`);
        shouldThrow = false;
        // return of(false);
      } else if (error.status === 422) {
        this.errorSubject.next(error);
      } else {
        return throwError(error);
      }
      if (shouldThrow) {
        return throwError(error);
      }
    }
  }
  private endRequest() {
    this.requestSubject.next(null);
  }
}
