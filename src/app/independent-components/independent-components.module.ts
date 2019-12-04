import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { InputEnglishDatepickerComponent } from './input-english-datepicker/input-english-datepicker.component';
import { InputMaskTextComponent } from './input-mask-text/input-mask-text.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forRoot(options),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  declarations: [
    InputMaskTextComponent,
    InputEnglishDatepickerComponent,
  ],
  exports: [
    CommonModule,
    InputMaskTextComponent,
    InputEnglishDatepickerComponent,
    ReactiveFormsModule,
  ],
})
export class IndependentComponentsModule { }
