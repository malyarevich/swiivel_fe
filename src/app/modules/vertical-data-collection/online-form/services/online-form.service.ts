import { Injectable, Type, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ShortTextFieldComponent } from "../online-form-fields/short-text-field/short-text-field.component";
import { LongTextFieldComponent } from "../online-form-fields/long-text-field/long-text-field.component";
import { NumberTextFieldComponent } from "../online-form-fields/number-text-field/number-text-field.component";
import { MultipleOptionsFieldComponent } from "../online-form-fields/multiple-options-field/multiple-options-field.component";
import { DropDownListFieldComponent } from "../online-form-fields/drop-down-list-field/drop-down-list-field.component";
import { DateTimeFieldComponent } from "../online-form-fields/date-time-field/date-time-field.component";
import { TimeFieldComponent } from "../online-form-fields/time-field/time-field.component";
import { EmailFieldComponent } from "../online-form-fields/email-field/email-field.component";
import { PhoneNumberFieldComponent } from "../online-form-fields/phone-number-field/phone-number-field.component";
import { HebrewDateFieldComponent } from "../online-form-fields/hebrew-date-field/hebrew-date-field.component";
import { LabelFieldComponent } from "../online-form-fields/label-field/label-field.component";
import { EmptyLineFieldComponent } from "../online-form-fields/empty-line-field/empty-line-field.component";
import { Form } from 'src/app/models/vertical-data-collection/form.model';
import { environment } from "../../../../../environments/environment";
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";

// TODO: Move this guy in any other place
export type IFormField =
  | typeof ShortTextFieldComponent
  | typeof LongTextFieldComponent
  | typeof NumberTextFieldComponent
  | typeof MultipleOptionsFieldComponent
  | typeof DropDownListFieldComponent
  | typeof DateTimeFieldComponent
  | typeof TimeFieldComponent
  | typeof EmailFieldComponent
  | typeof PhoneNumberFieldComponent
  | typeof HebrewDateFieldComponent
  | typeof LabelFieldComponent
  | typeof EmptyLineFieldComponent;

@Injectable()
export class OnlineFormService {
  formId: string;
  formValues: Map<string, any> = new Map();
  profileForm;
  fg: FormGroup;
  //FIXME: replace 'any' to interface (depend on server data)
  @Output() onChangeServerValidations: EventEmitter<any> = new EventEmitter();

  changeServerValidations(list: any) {
    this.onChangeServerValidations.emit(list);
  }

  updateServerFormErrors(errorList) {
    this.changeServerValidations(errorList);
  }

  verifyForm() {
    return this.fg.hasError;
  }

  componentFieldsMap = new Map<number, IFormField>([
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
  ]);

  getComponentByTypeNumber = (typeNumber: number) => {
    return this.componentFieldsMap.get(typeNumber);
  };

  setFormValueById(id: string, value: any) {
    this.formValues.set(id, value);
    // console.log(this.formValues);
  }

  getFormValueById(id: string): any {
    return this.formValues && this.formValues.has(id)
      ? this.formValues.get(id)
      : undefined;
  }

  setFormValues(formValues: Map<string, any>) {
    this.formValues = formValues ? new Map(Object.entries(formValues)) : this.formValues;
  }

  getFormValues(): any {
    return this.fg.value;
  }

  getIsFormView(): boolean {
    return false;
  }

  getFormGroup(): FormGroup {
    return this.fg;
  }

  addFormControl(id: string, fc: FormControl) {
    this.fg.addControl(id, fc);
  }

  setFormControlValue(id: string, value: string) {
    this.fg.patchValue({ id, value });
    // console.log(this.fg.value);
  }

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  setFromId(id: string) {
    this.formId = id;
  }

  getOneForm(id = this.formId): Observable<any> {
    if (id) {
      return this.http.get(`/proxy/forms/online/${id}`).pipe(map((response) => {
        this.setFormValues(response['data']['fieldsData']);
        return response
      }));
    }
    console.error("Id of form is undefined");
    return undefined;
  }

  sendForm(form: object = {}): Observable<any>  {
    if (this.formId) {
      return this.http
        .put(`/proxy/forms/online/${this.formId}`, form)
        .pipe(map(response => response));
    }
    console.error("Id of form is undefined");
    return undefined;
  }

  initOneForm() {
    this.fg = new FormGroup({});
  }
}
