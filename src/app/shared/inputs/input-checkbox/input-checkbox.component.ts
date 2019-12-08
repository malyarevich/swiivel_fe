import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
  ChangeDetectorRef,
  ElementRef,
  ViewChild
} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

import { NgControl, ControlValueAccessor } from '@angular/forms';


const deprecated = function(_this: any, name = ''){
  console.warn(`Input ${name} is deprecated`, _this);
}
@Component({
  selector: 'sw-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCheckboxComponent implements ControlValueAccessor {
  @Input() target = 'label';
  @Input()
  get isActive(){ return this.__isActive; }
  set isActive(value: boolean){
    deprecated(this, 'isActive');
    this.__isActive = value;
  }
  @Input() definition = false;
  @Input() disabled = false;

  @Input() value: string;

  @Output() readonly change: EventEmitter<any> = new EventEmitter();
  @Output() readonly _indeterminateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('input', {static: true}) _inputElement: ElementRef<HTMLInputElement>;
  @Input() set check(value: boolean) {
    this.checked = value;
  }
  @Input()
  get checked(): boolean { return this._checked; }
  set checked(value: boolean) {
    if (value != this.checked) {
      this._checked = value;
      this.cdr.markForCheck();
      if (this.onChange) this.onChange(this._checked);
      this.change.emit(this._checked)
    }
  }
  private __isActive: boolean;
  private _checked: boolean = false;
  private onChange: (value: any) => void;
  private onTouched: () => void;
  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) { this._required = coerceBooleanProperty(value); }
  private _required: boolean;

  @Input()
  get indeterminate(): boolean { return this._indeterminate; }
  set indeterminate(value: boolean) {
    const changed = value != this._indeterminate;
    this._indeterminate = coerceBooleanProperty(value);

    if (changed) {
      this._indeterminateChange.emit(this._indeterminate);
    }

    this._syncIndeterminate(this._indeterminate);
  }
  private _indeterminate: boolean = false;

  constructor(@Self() @Optional() public control: NgControl, public cdr: ChangeDetectorRef) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  writeValue(value: any) {
    this.checked = !!value;
  }

  _onInputClick(event: Event) {
    event.stopPropagation();
    if (!this.disabled) {
      if (this.indeterminate) {
        this._indeterminate = false;
        this._indeterminateChange.emit(this._indeterminate);
      }
    }
    this.toggle();
  }
  _onInteractionEvent(event: Event) {
    event.stopPropagation();
  }

  toggle(): void {
    this.checked = !this.checked;
  }

  public onBlur(event) {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  ngAfterViewInit() {
    if (this.__isActive !== undefined) deprecated(this, 'isActive');
    else this.__isActive = true;
    this._syncIndeterminate(this._indeterminate);
  }
  private _syncIndeterminate(value: boolean) {
    const nativeCheckbox = this._inputElement;

    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }

  public _onLabelClick(event: Event) {
    if (event.target['tagName'] !== 'INPUT' && this.__isActive && !this.disabled) {
      this.toggle();
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
