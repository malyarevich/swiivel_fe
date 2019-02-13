import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { KEY } from '../../services/local-storage';

export const HTTP_STORAGE_TOKEN_KEY = new InjectionToken<string>('HTTP_STORAGE_TOKEN_KEY');

export class StorageTokenInterceptor implements HttpInterceptor {
    private get token(): string | null {
        return JSON.parse(localStorage.getItem(`${KEY}: ${this.tokenKey}`));
    }

    constructor(@Inject(HTTP_STORAGE_TOKEN_KEY) private readonly tokenKey: string) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.token) {
            request = request.clone({
                setHeaders: {
                    'x-access-token': `${this.token}`
                }
            });
        }
        return next.handle(request);
    }
}
