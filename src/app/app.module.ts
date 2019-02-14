import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { LoginModule } from './modules/login';
import { InputContainerModule } from "./components/form-components";
import {AuthModule, AuthServiceConfig} from "./services/auth";
import {LocalStorageService} from "./services/local-storage";
import {InterceptorsConfig, InterceptorsModule} from "./utils/interceptors/interceptors.module";
import {environment} from "../environments/environment";

const authConfig: AuthServiceConfig = {
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
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
