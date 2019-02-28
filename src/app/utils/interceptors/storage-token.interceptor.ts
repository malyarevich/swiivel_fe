import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {KEY, LocalStorageService} from '../../services/local-storage';
import {Router} from "@angular/router";
import {tap} from 'rxjs/operators';
import {AuthServiceConfig, AUTH_SERVICE_CONFIG} from "../../services/auth";

export const HTTP_STORAGE_TOKEN_KEY = new InjectionToken<string>('HTTP_STORAGE_TOKEN_KEY');

export class StorageTokenInterceptor implements HttpInterceptor {
    private get token(): string | null {
        return JSON.parse(localStorage.getItem(`${KEY}: ${this.tokenKey}`));
    }

    constructor(
        @Inject(HTTP_STORAGE_TOKEN_KEY) private readonly tokenKey: string,
        @Inject(AUTH_SERVICE_CONFIG) private readonly config: AuthServiceConfig,
        private readonly localStoreService: LocalStorageService,
        private readonly router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.token) {
            request = request.clone({
                setHeaders: {
                    'x-access-token': `${this.token}`
                }
            });
        }
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.localStoreService.removeItem(this.config.storageTokenKey);
                        this.localStoreService.removeItem(this.config.user);
                        this.router.navigate(['login']);
                    }
                }
            })
        );
    }
}
