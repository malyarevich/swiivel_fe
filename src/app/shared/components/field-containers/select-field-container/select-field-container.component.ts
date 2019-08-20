import {
  Component,
  AfterContentChecked,
  ContentChild,
  OnDestroy,
  AfterContentInit,
} from '@angular/core';
import { FormControlName, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { COMMON_ERRORS } from '@enums/index';

@Component({
  selector: 'app-select-field-container',
  templateUrl: './select-field-container.component.html',
  styleUrls: ['select-field-container.component.scss'],
})
export class SelectFieldContainerComponent implements OnDestroy, AfterContentInit , AfterContentChecked {
  public errors = [];
  private _sub: Subscription;
  @ContentChild(FormControlName, {static: false}) private formControl: FormControl;
  classes = {
    'app-select-field-container': true
  }

  constructor() {}

  ngAfterContentInit() {
    this._sub = this.formControl.statusChanges.subscribe((status) => {
      this.classes['app-select-field-has-error'] = status === 'INVALID';
      if (status === 'INVALID') {
        this.errors = Object.keys(this.formControl.errors).map((key) => {
          return COMMON_ERRORS[key] || this.formControl.errors[key];
        });
      } else {
        this.errors = [];
      }
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
    this.errors = [];
  }
  ngAfterContentChecked(): void {
    this.classes['app-select-field-remove-clear-btn'] = this.formControl.value === null;
  }
}
