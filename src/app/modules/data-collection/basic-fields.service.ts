import { Injectable, Type } from '@angular/core';
import {ShortTextFieldComponent} from './form-constructor/filds/short-text-field/short-text-field.component';
import {LongTextFieldComponent} from './form-constructor/filds/long-text-field/long-text-field.component';
import {HttpClient,  HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {NumberTextFieldComponent} from './form-constructor/filds/number-text-field/number-text-field.component';
import {MultipleOptionsFieldComponent} from './form-constructor/filds/multiple-options-field/multiple-options-field.component';
import {EmailFieldComponent} from './form-constructor/filds/email-field/email-field.component';
import {DropDownListFieldComponent} from './form-constructor/filds/drop-down-list-field/drop-down-list-field.component';
import {DateTimeFieldComponent} from './form-constructor/filds/date-time-field/date-time-field.component';
import {HebrewDateFieldComponent} from './form-constructor/filds/hebrew-date-field/hebrew-date-field.component';
import {TimeFieldComponent} from './form-constructor/filds/time-field/time-field.component';
import {PhoneNumberFieldComponent} from './form-constructor/filds/phone-number-field/phone-number-field.component';
import {LabelFieldComponent} from './form-constructor/filds/label-field/label-field.component';
import {EmptyLineFieldComponent} from './form-constructor/filds/empty-line-field/empty-line-field.component';

@Injectable({
  providedIn: 'root'
})
export class BasicFieldsService {

  SERVER_URL = environment.api;


  params = new HttpParams().set('api_token', environment.api_token);

   componentMap = new Map<number,Type<any>>([
     [101, ShortTextFieldComponent],
     [102, LongTextFieldComponent],
     [103, NumberTextFieldComponent],
     [104, MultipleOptionsFieldComponent],
     [105, DropDownListFieldComponent],
     [106, DateTimeFieldComponent],
     [107, TimeFieldComponent],
     [108, EmailFieldComponent],
     [109, PhoneNumberFieldComponent],
     [110, HebrewDateFieldComponent],
     [111, LabelFieldComponent],
     [112, EmptyLineFieldComponent]
     ]
   );



  constructor(private http: HttpClient) {}

  getFieldsList() {
    return this.http.get(this.SERVER_URL+'/schema', {params: this.params})
      .pipe(
        map((response) => {return response;})
      );
  }
  getMappedList() {
    return this.http.get(this.SERVER_URL+'/mapped', {params: this.params})
      .pipe(
        map((response) => {return response;})
      );
  }
}
