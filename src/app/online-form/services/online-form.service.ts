import { EventEmitter, Injectable, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';
import { HttpService } from '@app/core/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckboxFieldComponent } from '../online-form-fields/checkbox-field/checkbox-field.component';
import { DateTimeFieldComponent } from '../online-form-fields/date-time-field/date-time-field.component';
import { DropDownListFieldComponent } from '../online-form-fields/drop-down-list-field/drop-down-list-field.component';
import { EmailFieldComponent } from '../online-form-fields/email-field/email-field.component';
import { EmptyLineFieldComponent } from '../online-form-fields/empty-line-field/empty-line-field.component';
import { HebrewDateFieldComponent } from '../online-form-fields/hebrew-date-field/hebrew-date-field.component';
import { LabelFieldComponent } from '../online-form-fields/label-field/label-field.component';
import { LongTextFieldComponent } from '../online-form-fields/long-text-field/long-text-field.component';
import { NumberTextFieldComponent } from '../online-form-fields/number-text-field/number-text-field.component';
import { PhoneNumberFieldComponent } from '../online-form-fields/phone-number-field/phone-number-field.component';
import { ShortTextFieldComponent } from '../online-form-fields/short-text-field/short-text-field.component';
import { TimeFieldComponent } from '../online-form-fields/time-field/time-field.component';

export const hasRequiredField = (abstractControl: AbstractControl | any): boolean => {
  if (abstractControl.validator) {
    const validator = abstractControl.validator({} as AbstractControl);
    if (validator && validator.required) {
      return true;
    }
  }
  if (abstractControl.controls) {
    for (const controlName in abstractControl.controls) {
      if (abstractControl.controls[controlName]) {
        if (hasRequiredField(abstractControl.controls[controlName])) {
          return true;
        }
      }
    }
  }
  return false;
};

// TODO: Move this guy in any other place
export type IFormField =
  | typeof ShortTextFieldComponent
  | typeof LongTextFieldComponent
  | typeof NumberTextFieldComponent
  | typeof CheckboxFieldComponent
  | typeof DropDownListFieldComponent
  | typeof DateTimeFieldComponent
  | typeof TimeFieldComponent
  | typeof EmailFieldComponent
  | typeof PhoneNumberFieldComponent
  | typeof HebrewDateFieldComponent
  | typeof LabelFieldComponent
  | typeof EmptyLineFieldComponent;

export const componentFieldsMap = new Map<number, IFormField>([
  [101, ShortTextFieldComponent],
  [102, LongTextFieldComponent],
  [103, NumberTextFieldComponent],
  [104, TimeFieldComponent],
  [105, DropDownListFieldComponent],
  [106, DateTimeFieldComponent],
  [107, CheckboxFieldComponent],
  [108, EmailFieldComponent],
  [109, PhoneNumberFieldComponent],
  [110, HebrewDateFieldComponent],
  [111, LabelFieldComponent],
  [112, EmptyLineFieldComponent]
]);

@Injectable()
export class OnlineFormService {
  formId: string;
  personId: string;
  formValues: Map<string, any> = new Map();
  profileForm;
  fgList: any = {};
  fg: FormGroup;
  // FIXME: replace 'any' to interface (depend on server data)
  @Output() onChangeServerValidations: EventEmitter<any> = new EventEmitter();

  changeServerValidations(list: any) {
    this.onChangeServerValidations.emit(list);
  }

  updateServerFormErrors(errorList) {
    this.changeServerValidations(errorList);
  }

  verifyForm() {
    return this.fgList[this.formId].hasError;
  }

  getComponentByTypeNumber = (typeNumber: number): IFormField => {
    // return {};
    return componentFieldsMap.get(typeNumber);
  }

  setFormValueById(id: string, value: any): Map<string, any> {
    return this.formValues.set(id, value);
    // console.log(this.formValues);
  }

  getFormValueById(id: string): any {
    return this.formValues && this.formValues.has(id)
      ? this.formValues.get(id)
      : undefined;
  }

  setFormValues(formValues: Map<string, any>): Map<string, any> {
    return (this.formValues = formValues
      ? new Map(Object.entries(formValues))
      : this.formValues);
  }

  getFormValues(): any {
    return this.fgList[this.formId].value;
  }

  getIsFormView(): boolean {
    return false;
  }

  getFormGroup(): FormGroup {
    return this.fgList[this.formId];
  }

  setFormGroup(fg: FormGroup): void {
    this.fgList[this.formId] = fg;
  }

  addFormControl(id: string, fc: FormControl) {
    this.fgList[this.formId].addControl(id, fc);
  }

  setFormControlValue(id: string, value: string) {
    this.fgList[this.formId].patchValue({ id, value });
    // console.log(this.fgList[this.formId].value);
  }

  constructor(private http: HttpService, private fb: FormBuilder) {}

  setFromId(id: string) {
    this.formId = id;
  }

  setPersonId(id: string) {
    this.personId = id;
  }

  getOneForm(id = this.formId): Observable<any> {
    if (id) {
      // TODO: when /online/link stops returning errors we should use it
      return this.http.get(`/proxy/forms/online/link/${id}`).pipe(
        // return this.http.get(`/proxy/forms/online/${id}`).pipe(
        map(response => {
          return response;
        })
      );
    }
    console.error('Id of form is undefined');
    return undefined;
  }

  getTemplateForm(id = this.formId): Observable<any> {
    if (id) {
      return this.http.get(`/proxy/forms/online/${id}`).pipe(
        map(response => {
          return response;
        })
      );
    }
    console.error('Id of form is undefined');
    return undefined;
  }

  getTemplateFormByPerson(id = this.formId, personId = this.personId) {
    if (id && personId) {
      return this.http.get(`/proxy/form-builder/form-preview-by-account/online/${id}/${personId}/`).pipe(
        map(response => {
          return response;
        })
      );
    }
    console.error('Id of form or personId is undefined');
    return undefined;
  }

  sendForm(form: object = {}): Observable<any> {
    if (this.formId) {
      return (
        this.http
          .put(`/proxy/forms/online/link/${this.formId}`, form)
          // .put(`/proxy/forms/online/${this.formId}`, form)
          .pipe(map(response => response))
      );
    }
    console.error('Id of form is undefined');
    return undefined;
  }

  sendFormTemplate(form: object = {}): Observable<any> {
    if (this.formId) {
      return this.http
        .put(`/proxy/forms/online/${this.formId}`, form)
        .pipe(map(response => response));
    }
    console.error('Id of template is undefined');
    return undefined;
  }

  initOneForm() {
    this.fgList[this.formId] = new FormGroup({});
  }
}
