import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AuthStoreReducers} from './auth-store.reducers';
import {EffectsModule} from '@ngrx/effects';
import {AuthStoreEffects} from './auth-store.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', AuthStoreReducers),
    EffectsModule.forFeature([AuthStoreEffects])
  ],
  providers: [AuthStoreEffects]
})
export class AuthStoreModule {
}
