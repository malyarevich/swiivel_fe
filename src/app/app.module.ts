import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {SharedStoreModule} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './services/auth';
import {PermissionService} from './services/permission/permission.service';
import {AppComponent} from './app.component';
import {LoginModule} from './modules/login';
import {InterceptorsConfig, InterceptorsModule} from '@app/utils';
import {environment} from '../environments/environment';

export const interceptorsConfig: InterceptorsConfig = {
  baseUrl: environment.apiCore,
  storageTokenKey: 'token'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    LoginModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    SharedStoreModule,
    InterceptorsModule.forRoot(interceptorsConfig),
  ],
  providers: [
    PermissionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
