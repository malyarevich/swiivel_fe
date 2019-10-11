import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {SharedStoreModule} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from '@services/auth';
import {PermissionService} from '@services/permission/permission.service';
import {AppComponent} from './app.component';
import {LoginModule} from '@modules/login';
import {InterceptorsModule} from '@app/utils';
import {environment} from '../environments/environment';
import { PopupComponent } from './core/components/popup/popup.component'
import { OverlayModule } from '@angular/cdk/overlay';
import { ErrorsListTooltipComponent } from '@app/modules/online-form/errors-list/errors-list-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    ErrorsListTooltipComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    LoginModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SharedStoreModule,
    InterceptorsModule.forRoot(),
    OverlayModule,
  ],
  entryComponents: [
    PopupComponent,
    ErrorsListTooltipComponent,
  ],
  providers: [
    PermissionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
