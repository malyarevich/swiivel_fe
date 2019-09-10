import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from '@core/components/main.component';

import { LoginComponent } from '@core/components/login.component';
import { RestorePasswordComponent } from '@core/components/restore-password.component';
import { SharedModule } from '@shared/shared.module';
import { AuthGuard } from '@core/auth.guard';
import { AuthService } from '@core/auth.service';
import { DashboardComponent } from '@core/components/dashboard.component';
import { FieldService } from '@core/field.service';
import { FormCreatorModule } from './form-creator/form-creator.module';
import { HttpService } from '@core/http.service';
import { AuthInterceptor } from './core/auth.interceptor';

export function onInit(authService: AuthService) {
  return () => authService.load();
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestorePasswordComponent,
    MainComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    FormCreatorModule,
    AppRoutingModule,
  ],
  providers: [
    HttpService,
    AuthGuard,
    AuthService,
    FieldService,
    { provide: APP_INITIALIZER, useFactory: onInit, multi: true, deps: [AuthService, HttpService]},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
