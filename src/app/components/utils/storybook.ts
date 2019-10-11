import { APP_BASE_HREF,  CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StorybookHttpMockRequestInterceptor } from './storybook-http-interceptor';

export const StorybookImports = [
    RouterModule.forRoot([], { useHash: true }),
    // InterceptorsModule.forRoot(),
];

export const StorybookProviders = [
    [{ provide: APP_BASE_HREF, useValue: '/' }],
    [{ provide: HTTP_INTERCEPTORS, useClass: StorybookHttpMockRequestInterceptor, multi: true}]
];