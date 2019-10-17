import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mock } from '../mock-api-responses';


@Injectable()
export class StorybookHttpMockRequestInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        console.log(`Intercepted httpCall: ${request.url}, Method: ${request.method}`);
        const mockResponse = mock(request);
        if (mockResponse) {
            return of(mockResponse);
        } else {
            return next.handle(request);
        }
    }
}