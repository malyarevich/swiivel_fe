import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Field } from '@models/data-collection/field.model';
import {
  IFormField,
  OnlineFormService
} from '../../services/online-form.service';

interface IFieldInput {
  field: Field;
  fg: FormGroup;
  validationText: string;
}

@Component({
  selector: 'sw-general-info-field',
  templateUrl: './general-info-field.component.html',
  styleUrls: ['./general-info-field.component.scss']
})
export class GeneralInfoFieldComponent implements OnInit, OnChanges, OnDestroy {
  @Input() field: Field;
  @Input() formErrors: string;
  @Input() fg: FormGroup;
  @Input() isViewOnly: boolean;
  value: string | any;
  fc: FormControl;

  validSubscription: Subscription;

  fieldComponent: any;
  fieldInputs$: BehaviorSubject<IFieldInput> = new BehaviorSubject(null);
  fieldOutputs: object;

  constructor(private onlineFormService: OnlineFormService) {}

  ngOnInit() {
    this.initFormField();
    this.initFormFieldValue();
    this.initReactiveFormControl();
    // this.initListener();
    this.fieldInputs$.next({
      field: this.field,
      fg: this.fg,
      validationText:
        this.formErrors.constructor !== Object ? this.formErrors : ''
    });
    this.fieldOutputs = {};
  }

  ngOnChanges() {
    this.fieldInputs$.next({
      field: this.field,
      fg: this.fg,
      validationText:
        this.formErrors.constructor !== Object ? this.formErrors : ''
    });
  }

  initFormField() {
    this.fieldComponent = this.onlineFormService.getComponentByTypeNumber(
      this.field.type
    );
  }

  initFormFieldValue() {
    this.value = this.field._id
      ? this.onlineFormService.getFormValueById(this.field._id)
      : 'ID is undefined';
  }

  initReactiveFormControl() {
    if (this.field._id) {
      const aValidators = !this.field.options.readonly
        ? Validators.compose(this.getComposed())
        : {};
      this.fc = new FormControl(
        {
          value: this.value,
          disabled: this.field.options.readonly || this.isViewOnly
        },
        aValidators
      );
      this.onlineFormService.addFormControl(this.field._id, this.fc);
      // this.onlineFormService.setFormControlValue(this.field._id, this.value);
    }
    this.fg = this.onlineFormService.getFormGroup();
  }

  getComposed() {
    const arrayValidators = [];

    if (this.field.options.required) {
      arrayValidators.push(Validators.required);
    }

    if (this.field.options.minFieldSize) {
      arrayValidators.push(
        Validators.minLength(this.field.options.minFieldSize)
      );
    }

    if (this.field.options.maxFieldSize) {
      arrayValidators.push(
        Validators.maxLength(this.field.options.maxFieldSize)
      );
    }

    return arrayValidators;
  }

  // initListener() {

  //   this.validSubscription = this.onlineFormService.onChangeServerValidations.subscribe(
  //     list => {
  //       this.validationText = list[this.field._id];

  //       this.fieldInputs = {
  //         field: this.field,
  //         fg: this.fg,
  //         validationText: this.validationText
  //       };
  //     }
  //   );
  // }

  ngOnDestroy(): void {
    if (this.validSubscription) {
      this.validSubscription.unsubscribe();
    }
  }
}
