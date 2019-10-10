import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganisationRoutingModule} from './organisation-routing.module';
import {LayoutComponent} from './components/layout';
import {HeaderComponent} from './components/header';
import {HeaderTopComponent} from './components/header-top';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {PersonService} from './modules/person/services/person.service';
import {DashboardModule} from './modules/dashboard';
import {PersonModule} from './modules/person';
import * as fromPerson from './modules/person/store/person.reducer';
import {PersonEffects} from './modules/person/store/person.effect';
import {UserService} from '../../services/user/user.service';
import { CreatorHeaderComponent } from './components/creator-header/creator-header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    HeaderTopComponent,
    CreatorHeaderComponent,
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule,
    DashboardModule,
    PersonModule,
    StoreModule.forFeature('person', fromPerson.reducer),
    EffectsModule.forFeature([PersonEffects]),
  ],
  providers: [PersonService]
})
export class OrganizationModule {
}
