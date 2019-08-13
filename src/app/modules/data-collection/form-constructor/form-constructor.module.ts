import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormConstructorRoutingModule} from './form-constructor-routing.module';

import {SaveFormService} from '../services/save-form.service';
import {ConstructorDraftService} from '../services/constructor-draft.service';

import {FormNavigationBarComponent} from './form-navigation-bar/form-navigation-bar.component';

@NgModule({
  declarations: [
    FormNavigationBarComponent,
  ],
  imports: [
    CommonModule,
    FormConstructorRoutingModule,
  ],
  providers: [
    SaveFormService,
    ConstructorDraftService,
  ]
})
export class FormConstructorModule {
}
