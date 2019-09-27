import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TreeModule } from 'angular-tree-component';

import { AppComponent } from './app.component';

import { UploadReviewFormModule } from '@app/upload-review-form/upload-review-form.module';
import { AuthGuard } from '@core/auth.guard';
import { AuthInterceptor } from '@core/auth.interceptor';
import { AuthService } from '@core/auth.service';
import { DashboardComponent } from '@core/components/dashboard.component';
import { LoginComponent } from '@core/components/login.component';
import { RestorePasswordComponent } from '@core/components/restore-password.component';
import { FieldService } from '@core/field.service';
import { HttpService } from '@core/http.service';
import { SharedModule } from '@shared/shared.module';

export function onInit(authService: AuthService) {
  return () => authService.load();
}

import { OverlayModule } from '@angular/cdk/overlay';
import { PopupComponent } from '@core/components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestorePasswordComponent,
    DashboardComponent,
    PopupComponent,
  ],
  imports: [
    TreeModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    OverlayModule,
    UploadReviewFormModule,
  ],
  entryComponents: [
    PopupComponent,
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
