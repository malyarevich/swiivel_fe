<<<<<<< HEAD
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Field } from '@models/data-collection/field.model';
import { BehaviorSubject, Subscription } from 'rxjs';
=======
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '@models/data-collection/field.model';
import { BehaviorSubject } from 'rxjs';
>>>>>>> development
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
export class GeneralInfoFieldComponent implements OnInit, OnChanges {
  @Input() field: Field;
  @Input() formErrors: string;
  @Input() fg: FormGroup;
  @Input() isViewOnly: boolean;

  fieldComponent: IFormField;
  fieldInputs$: BehaviorSubject<IFieldInput> = new BehaviorSubject(null);
  fieldOutputs: object;

  constructor(private onlineFormService: OnlineFormService) {}

  ngOnInit() {
    this.initFormField();
    this.fieldInputs$.next({
      field: this.field,
      fg: this.fg,
      validationText:
        this.formErrors.constructor !== Object ? this.formErrors : ''
    });
    this.fieldOutputs = {};
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes', changes);
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

  isRenderable(): boolean {
    return this.fg && !!this.fieldComponent;
  }
}
