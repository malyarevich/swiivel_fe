import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { PopupComponent } from '@core/components/popup/popup.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormCreatorModule } from './form-creator/form-creator.module';
// todo: delete after routing
import { DataCollectionComponent } from '@app/modules/data-collection/data-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestorePasswordComponent,
    MainComponent,
    DashboardComponent,
    PopupComponent,
    DataCollectionComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
