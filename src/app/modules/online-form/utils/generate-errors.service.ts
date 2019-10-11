import { Injectable } from '@angular/core';
import {
  FormGroup,
  ValidationErrors
} from '@angular/forms';
import { Field } from '@models/data-collection/field.model';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';

export interface ISectionError {
  control: string;
  error: string;
  value: boolean | any;
  sectionControl: Field;
}

@Injectable({ providedIn: 'root' })
export class GenerateErrorsService {
  errorsList = [];
  errors$ = new BehaviorSubject([]);
  errorAsObservable$: Observable<ISectionError[]> = this.errors$.asObservable();

  getFormGroupAndSection(section: Field, form: FormGroup) {
    this.errorsList = [];
    Object.keys(form.controls).forEach((key) => {
      const controlErrors: ValidationErrors = form.get(key).errors;

      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          this.errorsList.push({
            control: key,
            error  : keyError,
            value  : controlErrors[keyError]
          });
        });
      }
    });

    const res = [];
    section.fields.forEach((field) => {
      this.errorsList.forEach((error) => {
        if (field._id === error.control) {
          res.push({
            error,
            sectionControl: section.fields.find((f) => f._id === error.control)
          });
        }
      });
    });

    this.errors$.next(res);
  }
}
