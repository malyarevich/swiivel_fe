import { Component, Optional, Inject, ContentChild, AfterContentInit, OnDestroy } from '@angular/core';
import { FormControlName, FormControl } from '@angular/forms';
import { COMMON_ERRORS } from '@shared/form-errors.enum';
import { INPUT_ERROR_DISPLAY_STRATEGY, InputErrorDisplayStrategy } from '@core/input-error-display-strategy';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-input-container',
    templateUrl: './input-container.component.html',
    styleUrls: ['./input-container.component.scss'],
})
export class InputContainerComponent implements AfterContentInit, OnDestroy {
  public errors = [];
  private _sub: Subscription;
  @ContentChild(FormControlName, {static: false}) private formControl: FormControl;

  constructor(
    @Optional() @Inject(INPUT_ERROR_DISPLAY_STRATEGY) private readonly strategy: InputErrorDisplayStrategy
  ) {}

  ngAfterContentInit() {
    this._sub = this.formControl.statusChanges.subscribe((status) => {
      if (status === 'INVALID' && (!this.strategy || this.strategy.shouldDisplayError(this.formControl))) {
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
}
