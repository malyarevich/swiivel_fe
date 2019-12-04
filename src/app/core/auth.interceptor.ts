import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { empty, Observable, pipe, range, throwError, timer, zip } from 'rxjs';
import { finalize, map, mergeMap, retryWhen, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';


const guestUrls = [
  '/login',
  '/forgot-password',
  '/reset-password',
];

const backoff = (maxTries, ms) => {
 return pipe(
   retryWhen(attempts => zip(range(1, maxTries), attempts)
     .pipe(
       map(([i]) => i * i),
       mergeMap(i =>  timer(i * ms))
     )
   )
 );
};

const addAuthHeader = (request: HttpRequest<any>, token: string) => {
  return request.clone({ setHeaders: { 'x-access-token': token}});
};


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  retries = 1;
  counter = 0;
  inprogress = {};
  guestPaths = guestUrls.map((url) => `/api/v1${url}`);
  constructor(private auth: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const guestPath = this.guestPaths.includes(req.url);
    if (guestPath) {
      return next.handle(req);
    } else {
      if (this.auth.token) {
        req = addAuthHeader(req, this.auth.token);
      }
      return next.handle(req).pipe(
        tap(
          (event: HttpEvent<any>) => {
            if (event.type === HttpEventType.User) {

            }
          },
          (error) => {
            if (error instanceof HttpErrorResponse) {
              if (error.status === 401) {
                this.auth.signout();
              } else {
                return throwError(error);

              }
            }
          }
        ),
        finalize(() => {
          this.counter++;
          if (req.body) { console.table(req.body); }
        }),
      );
    }
  }
}
