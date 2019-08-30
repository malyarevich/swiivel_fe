import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';

import { MainComponent } from '@core/components/main.component';
import { LoginComponent } from '@core/components/login.component';
import { RestorePasswordComponent } from '@core/components/restore-password.component';
import { SharedModule } from '@shared/shared.module';
import { AuthGuard } from '@core/auth.guard';
import { AuthService } from '@core/auth.service';
import { DashboardComponent } from '@core/components/dashboard.component';
import { PopupComponent } from '@core/services/popup/popup.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OverlayModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RestorePasswordComponent,
    MainComponent,
    DashboardComponent,
    PopupComponent
  ],
  entryComponents: [
    PopupComponent,
    // DashboardComponent
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
