import {FocusableOption, FocusMonitor, FocusOrigin} from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  HostListener,
  Self,
  ViewChild,
  Renderer2,
  HostBinding,
  AfterViewInit,
  OnInit,
  ContentChildren,
  QueryList,
  Directive,
  forwardRef
} from '@angular/core';


import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputRadioComponent } from './input-radio.component';
import { uniqueId } from 'lodash';

export const RADIO_GROUP_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true
};
@Directive({
  selector: 'sw-radio-group',
  providers: [RADIO_GROUP_CONTROL_VALUE_ACCESSOR]
})
export class RadioGroupComponent implements ControlValueAccessor, AfterViewInit {
  inited = false;
  _value: any = null;
  _disabled = false;
  _required: boolean;
  _name: string = uniqueId('radio-group-');
  @ContentChildren(forwardRef(() => InputRadioComponent), {descendants: true}) inputs: QueryList<InputRadioComponent>;
  private _selected: InputRadioComponent | null = null;
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  private _updateRadioButtonNames(): void {
    if (this.inputs) {
      this.inputs.forEach(radio => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }

  _markInputsForCheck() {
    if (this.inputs) {
      this.inputs.forEach(radio => radio._markForCheck());
    }
  }


  private _updateSelectedRadioFromValue(): void {
    // If the value already matches the selected radio, do nothing.
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;

    if (this.inputs && !isAlreadySelected) {
      this._selected = null;
      this.inputs.forEach(radio => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  private onChange: (value: any) => void = (value: any) => {
    this.change.emit(value);
  };
  private onTouched: () => void = () => {
    // this.blur.emit();
  };
  @Output() readonly change: EventEmitter<any> = new EventEmitter();
  @Input()
  get name(): string { return this._name; }
  set name(value: string) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  @Input()
  get selected() { return this._selected; }
  set selected(selected: any | null) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }


  @Input()
  get value(): any { return this._value; }
  set value(newValue: any) {
    if (this._value !== newValue) {
      // Set this before proceeding to ensure no circular loop occurs with selection.
      this._value = newValue;

      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this._markInputsForCheck();
  }
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    this._markInputsForCheck();
  }
  
  constructor(public cdr: ChangeDetectorRef, ){}
  ngAfterViewInit(){
    this.inited = true;
  }
  writeValue(value: any) {
    this.value = value;
    this.cdr.markForCheck();
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

}