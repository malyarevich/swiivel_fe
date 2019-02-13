import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { LoginModule } from './modules/login';
import { InputContainerModule } from "./components/form-components";
import { LayoutComponent } from './modules/layout/main-layout.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AuthModule, AuthServiceConfig} from "./services/auth";
import {LocalStorageService} from "./services/local-storage";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InterceptorsConfig, InterceptorsModule} from "./utils/interceptors/interceptors.module";

const authConfig: AuthServiceConfig = {
  // baseUrl: 'http://test.devurai.com/api/v1/',
  storageTokenKey: 'token',
  user: 'user'
};

export const interceptorsConfig: InterceptorsConfig = {
  baseUrl: 'http://test/api/v1/',
  storageTokenKey: 'token'
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule.forRoot(authConfig),
    InterceptorsModule.forRoot(interceptorsConfig),
    LoginModule,
    AuthModule,
    InputContainerModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
