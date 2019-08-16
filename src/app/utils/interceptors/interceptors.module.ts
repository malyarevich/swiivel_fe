import {NgModule, ModuleWithProviders} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BaseUrlInterceptor, HTTP_BASE_URL} from './base-url.interceptor';
import {StorageTokenInterceptor} from './storage-token.interceptor';
import {environment} from '../../../environments/environment';

@NgModule({
  declarations: [],
  imports: []
})

export class InterceptorsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: InterceptorsModule,
      providers: [
        {
          provide: HTTP_BASE_URL,
          useValue: environment.apiCore
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BaseUrlInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: StorageTokenInterceptor,
          multi: true
        },
      ]
    };
  }
}
