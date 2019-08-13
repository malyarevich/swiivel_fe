import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

export class StorageTokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router
  ) {}

  private token: string;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = localStorage.getItem('user');
    if (user) {
      this.token = JSON.parse(user).access_token;
    } else {
      this.token = 'token';
    }
    request = request.clone({
      setHeaders: {
        'x-access-token': `${this.token}`
      }
    });
    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              localStorage.removeItem('user');
              this.router.navigate(['/login']);
            }
          }
        })
      );
  }
}
