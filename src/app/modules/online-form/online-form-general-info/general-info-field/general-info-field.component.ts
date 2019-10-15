import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Field } from 'src/app/models/data-collection/field.model';
import {
  OnlineFormService,
  IFormField
} from '../../services/online-form.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sw-general-info-field',
  templateUrl: './general-info-field.component.html',
  styleUrls: ['./general-info-field.component.scss']
})
export class GeneralInfoFieldComponent implements OnInit, OnDestroy {
  @Input() field: Field;
  @Input() formErrors: object;
  @Input() fg: FormGroup;
  value: string | any;
  isDisabled: any;
  fc: FormControl;

  validSubscription: Subscription;
  validationText: string;

  fieldComponent: any;
  fieldInputs: object;
  fieldOutputs: object;

  constructor(private onlineFormService: OnlineFormService) {}

  ngOnInit() {
    this.initIsDisabled();
    this.initFormField();
    this.initFormFieldValue();
    this.initReactiveFormControl();
    this.initListener();
    this.fieldInputs = {
      field: this.field,
      fg: this.fg,
      validationText: this.validationText
    };
    this.fieldOutputs = {};
  }

  initIsDisabled() {
    this.isDisabled = this.onlineFormService.getIsFormView();
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
          disabled: this.field.options.readonly || this.isDisabled
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

  initListener() {
    this.validSubscription = this.onlineFormService.onChangeServerValidations.subscribe(
      list => {
        this.validationText = list[this.field._id];

        this.fieldInputs = {
          field: this.field,
          fg: this.fg,
          validationText: this.validationText
        };
      }
    );
  }

  ngOnDestroy(): void {
    if (this.validSubscription) {
      this.validSubscription.unsubscribe();
    }
  }
}
