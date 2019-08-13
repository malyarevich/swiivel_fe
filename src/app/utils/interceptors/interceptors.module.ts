import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor, HTTP_BASE_URL } from './base-url.interceptor';
import { NoopInterceptor } from './noop.interceptor';
import { StorageTokenInterceptor } from './storage-token.interceptor';

export interface InterceptorsConfig {
    baseUrl?: string | null | undefined;
    storageTokenKey?: string | null | undefined;
}

@NgModule({
    declarations: [],
    imports: []
})

export class InterceptorsModule {
    static forRoot(config: InterceptorsConfig): ModuleWithProviders {
        return {
            ngModule: InterceptorsModule,
            providers: [
                {
                    provide: HTTP_BASE_URL,
                    useValue: config.baseUrl
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: config.baseUrl ? BaseUrlInterceptor : NoopInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: config.storageTokenKey ? StorageTokenInterceptor : NoopInterceptor,
                    multi: true
                },
            ]
        };
    }
}
