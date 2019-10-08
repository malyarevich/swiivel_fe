import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormConstructorRoutingModule} from './form-constructor-routing.module';

import {SaveFormService} from '../services/save-form.service';
import {ConstructorDraftService} from '../services/constructor-draft.service';

import {FormNavigationBarComponent} from './form-navigation-bar/form-navigation-bar.component';
import { SharedModule } from '@app/components/shared.module';

@NgModule({
  declarations: [
    FormNavigationBarComponent,
  ],
  imports: [
    CommonModule,
    FormConstructorRoutingModule,
    SharedModule
  ],
  providers: [
    SaveFormService,
    ConstructorDraftService,
  ]
})
export class FormConstructorModule {
}
