import {Injectable, Type} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ShortTextFieldComponent} from "./v-form-view/fileds/short-text-field/short-text-field.component";
import {LongTextFieldComponent} from "./v-form-view/fileds/long-text-field/long-text-field.component";
import {NumberTextFieldComponent} from "./v-form-view/fileds/number-text-field/number-text-field.component";
import {MultipleOptionsFieldComponent} from "./v-form-view/fileds/multiple-options-field/multiple-options-field.component";
import {DropDownListFieldComponent} from "./v-form-view/fileds/drop-down-list-field/drop-down-list-field.component";
import {DateTimeFieldComponent} from "./v-form-view/fileds/date-time-field/date-time-field.component";
import {TimeFieldComponent} from "./v-form-view/fileds/time-field/time-field.component";
import {EmailFieldComponent} from "./v-form-view/fileds/email-field/email-field.component";
import {PhoneNumberFieldComponent} from "./v-form-view/fileds/phone-number-field/phone-number-field.component";
import {HebrewDateFieldComponent} from "./v-form-view/fileds/hebrew-date-field/hebrew-date-field.component";
import {LabelFieldComponent} from "./v-form-view/fileds/label-field/label-field.component";
import {EmptyLineFieldComponent} from "./v-form-view/fileds/empty-line-field/empty-line-field.component";
import {map} from "rxjs/operators";


@Injectable()
export class VFieldsService {
  constructor(private http: HttpClient) {}


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

  getCustomList() {
    return this.http.get('/proxy/schema')
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getExistingList() {
    return this.http.get('/proxy/mapped')
      .pipe(
        map((response) => {return response;})
      );
  }

  getExistingSideBarList() {
    //TODO: temporarily
    // return this.http.get('http://34.73.126.99/api/v1/mapped2?api_token=123')
    return this.http.get('http://34.73.126.99/api/v1/sidebar?api_token=123')
      .pipe(
        map((response) => {return response;})
      );
  }

}
