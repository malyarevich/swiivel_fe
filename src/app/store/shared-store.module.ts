import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AuthStoreModule} from './auth-store';

@NgModule({
  imports: [
    CommonModule,
    AuthStoreModule
  ],
  declarations: []
})

export class SharedStoreModule {
}
