import {Injectable, Type} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ShortTextFieldComponent} from "./online-form-fields/fileds/short-text-field/short-text-field.component";
import {LongTextFieldComponent} from "./online-form-fields/fileds/long-text-field/long-text-field.component";
import {NumberTextFieldComponent} from "./online-form-fields/fileds/number-text-field/number-text-field.component";
import {MultipleOptionsFieldComponent} from "./online-form-fields/fileds/multiple-options-field/multiple-options-field.component";
import {DropDownListFieldComponent} from "./online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component";
import {DateTimeFieldComponent} from "./online-form-fields/fileds/date-time-field/date-time-field.component";
import {TimeFieldComponent} from "./online-form-fields/fileds/time-field/time-field.component";
import {EmailFieldComponent} from "./online-form-fields/fileds/email-field/email-field.component";
import {PhoneNumberFieldComponent} from "./online-form-fields/fileds/phone-number-field/phone-number-field.component";
import {HebrewDateFieldComponent} from "./online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component";
import {LabelFieldComponent} from "./online-form-fields/fileds/label-field/label-field.component";
import {EmptyLineFieldComponent} from "./online-form-fields/fileds/empty-line-field/empty-line-field.component";
import {Form} from "../vertical-data-collection/model/form.model";
import {environment} from "../../../environments/environment";

@Injectable()
export class OnlineFormService {

  componentFieldsMap = new Map<number,Type<any>>([
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

  constructor(private http: HttpClient) { }

  getOneForm(id): Observable<any> {
    return this.http.get(`/proxy/forms/${id}`)
      .pipe(
        map((response) => response)
      );
  }

  sendForm(form: Form) {

    if(form._id!==""){
      form.step=1;
      return this.http.put(`/proxy/forms/${form._id}`, form)
        .pipe(
          map((response) =>  response)
        );
    }
    return this.http.post('/proxy/forms', form)
      .pipe(
        map((response) => response)
      );

  }

  sendFamilyForm(form: Form) {
    return this.http.put(`${environment.apiFB}/familyForm/${form._id}?api_token=123`, form)
      .pipe(
        map((response) =>  response)
      );
  }

}
