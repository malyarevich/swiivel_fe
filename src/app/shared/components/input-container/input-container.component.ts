import { Component, Optional, Inject, ContentChild, AfterContentInit, OnDestroy, ViewChild, AfterViewInit, AfterContentChecked, ElementRef, HostBinding, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { FormControlName, FormControl } from '@angular/forms';
import { COMMON_ERRORS } from '@enums/index';
import { InputLabel } from './label';
import { INPUT_ERROR_DISPLAY_STRATEGY, InputErrorDisplayStrategy } from './strategy';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-input-container',
    templateUrl: './input-container.component.html',
    styleUrls: ['./input-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputContainerComponent implements AfterContentInit, AfterViewInit, OnDestroy {
  @Input() fieldType: string = 'table';
  @HostBinding('class.invalid') get invalid(): boolean {
    return this._control.invalid === true;
  }
  @HostBinding('class.table') get isTable(): boolean {
    return this.fieldType === 'table';
  }
  @HostBinding('class.cell') get isCell(): boolean {
    return this.fieldType === 'cell';
  }
  @HostBinding('class.fill') get hasValueAndLabel(): boolean {
    return this.hasLabel && this._control && this._control.value.trim().length > 0;
  }

  private _destroyed = new Subject<void>();
  public errors = [];
  @ContentChild(FormControlName, {static: false}) private _controlNonStatic: FormControl;
  @ContentChild(FormControlName, {static: true}) private _controlStatic: FormControl;
  get _control() {
    return this._controlNonStatic || this._controlStatic;
  }
  @ContentChild(InputLabel, {static: false}) private _labelNonStatic: InputLabel;
  @ContentChild(InputLabel, {static: true}) private _labelStatic: InputLabel;
  get _label() {
    return this._labelNonStatic || this._labelStatic;
  }

  hasLabel() {
    return !!this._label;
  }

  constructor(
    @Optional() @Inject(INPUT_ERROR_DISPLAY_STRATEGY) private readonly strategy: InputErrorDisplayStrategy,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterContentInit() {
    this._control.statusChanges.pipe(
      startWith(null!),
      takeUntil(this._destroyed)
    ).subscribe((status) => {
      this._changeDetectorRef.markForCheck();
      if (status === 'INVALID' && (!this.strategy || this.strategy.shouldDisplayError(this._control))) {
        this.errors = Object.keys(this._control.errors).map((key) => {
          let error = this._control.errors[key];
          if (key in COMMON_ERRORS) {
            if (typeof error === 'object') {
              let errorText = COMMON_ERRORS[key];
              for (let errorVal of Object.keys(error)) {
                errorText = errorText.replace(`%${errorVal}%`, error[errorVal]);
              }
              return errorText;
            } else {
              return COMMON_ERRORS[key];
            }

          } else {
            return error;
          }
        });
      } else {
        this.errors = [];
      }
    });
    this._control.valueChanges.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._changeDetectorRef.markForCheck();
    })
  }

  ngAfterViewInit() {
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
