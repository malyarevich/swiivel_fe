import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  'post'(url: string, data: object): Observable<any> {
    this.requestSubject.next('Saving data');
    return this.http.post(this.apiUrl + url, data)
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
  'postForm'(url: string, data: object, showLoader = false): Observable<any> {
    if (showLoader) {
      this.requestSubject.next('Saving data');
    }
    const formData = this.obj2formData(data);
    return this.http.post(this.apiUrl + url, formData, {
      reportProgress: true,
      observe: 'events'
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
          if (response.status === 1) {
            return response.data;
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
  'put'(url: string, data: object): Observable<any> {
    this.requestSubject.next('Updating data');
    return this.http.put(this.apiUrl + url, data)
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
  'putForm'(url: string, data: object): Observable<any> {
    this.requestSubject.next('Updating data');
    const formData = this.obj2formData(data);
    return this.http.put(this.apiUrl + url, formData, {
      reportProgress: true,
      observe: 'events'
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
  'delete'(url: string): Observable<any> {
    this.requestSubject.next('Deleting data');
    return this.http.delete(this.apiUrl + url)
      .pipe(
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
      if ('errors' in error) {
        console.error(`Bad response`, error);
      }
      let shouldThrow = true;
      if (!this.errorSubject) { this.errorSubject = new BehaviorSubject(null); }
      if (error.status === 0) {
        this.errorSubject.next(`Backend is down`);
      } else if (error.status === 400) {

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
