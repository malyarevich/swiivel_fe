import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormConstructorRoutingModule} from './form-constructor-routing.module';

import {SaveFormService} from '../services/save-form.service';
import {ConstructorDraftService} from '../services/constructor-draft.service';

import {FormNavigationBarComponent} from './form-navigation-bar/form-navigation-bar.component';
import { SharedModule } from '@app/components/shared.module';
import { DataCollectionComponent } from '../data-collection.component';
import { FormService } from '../services/form.service';

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
    DataCollectionComponent,
    FormService,
  ]
})
export class FormConstructorModule {
}
