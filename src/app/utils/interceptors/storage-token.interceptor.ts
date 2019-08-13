import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';


export class StorageTokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.access_token) {
      request = request.clone({
        setHeaders: {
          'x-access-token': `${user.access_token}`
        }
      });
    }
    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              localStorage.removeItem('user');
              this.router.navigate(['login']);
            }
          }
      })
    );
  }
}
