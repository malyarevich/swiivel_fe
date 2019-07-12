import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {StoreModule, Store} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from './modules/login';
import {AuthModule, AuthService, AuthServiceConfig} from "./services/auth";
import {LocalStorageService} from "./services/local-storage";
import {InterceptorsConfig, InterceptorsModule} from "./utils/interceptors";
import {environment} from "../environments/environment";
import {UserLoggedModule} from "./modules/user-logged/user-logged.module";
import {UserLoggedInitFactory} from "./modules/user-logged/user-logged-init.service";
import {UserLoggedEffects} from "./modules/user-logged/store/user-logged.effect";
import {UserLoggedService} from "./modules/user-logged/user-logged.service";
import {PermissionService} from "./services/permission/permission.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const authConfig: AuthServiceConfig = {
    storageTokenKey: 'token',
    user: 'user'
};

export const interceptorsConfig: InterceptorsConfig = {
    baseUrl: environment.apiCore,
    storageTokenKey: 'token'
};

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        NgbModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LoginModule,
        UserLoggedModule,
        AuthModule.forRoot(authConfig),
        InterceptorsModule.forRoot(interceptorsConfig),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([UserLoggedEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [
        LocalStorageService,
        UserLoggedService,
        PermissionService,
        {
            provide: APP_INITIALIZER,
            useFactory: UserLoggedInitFactory,
            multi: true,
            deps: [Store, AuthService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
