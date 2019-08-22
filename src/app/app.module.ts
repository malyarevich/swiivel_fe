import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from '@core/components/main.component';

import { LoginComponent } from '@core/components/login.component';
import { RestorePasswordComponent } from '@core/components/restore-password.component';
import { SharedModule } from '@shared/shared.module';
import { AuthGuard } from '@core/auth.guard';
import { AuthService } from '@core/auth.service';
import { DashboardComponent } from '@core/components/dashboard.component';

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
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
