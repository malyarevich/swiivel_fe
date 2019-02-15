import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from './modules/login';
import {AuthModule, AuthServiceConfig} from "./services/auth";
import {LocalStorageService} from "./services/local-storage";
import {InterceptorsConfig, InterceptorsModule} from "./utils/interceptors/interceptors.module";
import {environment} from "../environments/environment";

const authConfig: AuthServiceConfig = {
  storageTokenKey: 'token',
  user: 'user'
};

export const interceptorsConfig: InterceptorsConfig = {
  baseUrl: 'http://red.dev.codeblue.ventures/api/v1',
  storageTokenKey: 'token'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    AuthModule.forRoot(authConfig),
    InterceptorsModule.forRoot(interceptorsConfig),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
