import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from '@core/components/main.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from '@core/auth.guard';
import { AuthInterceptor } from '@core/auth.interceptor';
import { AuthService } from '@core/auth.service';
import { DashboardComponent } from '@core/components/dashboard.component';
import { LoginComponent } from '@core/components/login.component';
import { RestorePasswordComponent } from '@core/components/restore-password.component';
import { FieldService } from '@core/field.service';
import { HttpService } from '@core/http.service';
import { SharedModule } from '@shared/shared.module';
import { FormCreatorModule } from './form-creator/form-creator.module';

export function onInit(authService: AuthService) {
  return () => authService.load();
}

import { OverlayModule } from '@angular/cdk/overlay';
// todo: delete after routing
import { PopupComponent } from '@core/components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestorePasswordComponent,
    MainComponent,
    DashboardComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    FormCreatorModule,
    AppRoutingModule,
    OverlayModule
  ],
  entryComponents: [
    PopupComponent
  ],
  providers: [
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
