import { Component, OnInit, forwardRef, Renderer2, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const PHONE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputPhoneNumberComponent),
  multi: true
};

@Component({
  selector: 'sw-input-phone-number',
  templateUrl: './input-phone-number.component.html',
  styleUrls: ['./input-phone-number.component.scss'],
  providers: [PHONE_CONTROL_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputPhoneNumberComponent implements OnInit, ControlValueAccessor {

  onChange: Function;
  onTouched: Function;

  @ViewChild('input', {static: true}) input: ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  writeValue(value: string): void {
    this.renderer.setProperty(this.input.nativeElement, 'value', value);
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }

  isEmpty(): boolean {
    return !this.input.nativeElement.value;
  }

  _onTouched(): void {
    this.onTouched();
  }

}