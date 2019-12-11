import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

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

import { FontAwesomeModule, FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';


const onInit: (authService: AuthService) => any = (authService: AuthService) => {
  return (): Promise<boolean> => {
    return authService.load();
  };
};

import { OverlayModule, OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { PopupComponent } from '@core/components/popup/popup.component';
import { ErrorsListTooltipComponent } from '@app/online-form/errors-list/errors-list-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestorePasswordComponent,
    DashboardComponent,
    PopupComponent,
    ErrorsListTooltipComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
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
    ErrorsListTooltipComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    FieldService,
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer},
    { provide: APP_INITIALIZER, useFactory: onInit, multi: true, deps: [AuthService, HttpService] },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary, config: FaConfig) {
  }
}
