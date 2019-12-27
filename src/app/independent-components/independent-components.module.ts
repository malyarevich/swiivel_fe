import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownRangePercentComponent } from '@app/independent-components/dropdown-range-percent/dropdown-range-percent.component';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { Ng5SliderModule } from 'ng5-slider';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { InputEnglishDatepickerComponent } from './input-english-datepicker/input-english-datepicker.component';
import { InputMaskTextComponent } from './input-mask-text/input-mask-text.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  imports: [
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    Ng5SliderModule,
    NgxMaskModule.forRoot(options),
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    DropdownRangePercentComponent,
    InputMaskTextComponent,
    InputEnglishDatepickerComponent,
  ],
  entryComponents: [
    FaIconComponent
  ],
  exports: [
    CommonModule,
    DropdownRangePercentComponent,
    InputMaskTextComponent,
    InputEnglishDatepickerComponent,
    ReactiveFormsModule,
  ],
})
export class IndependentComponentsModule { }
