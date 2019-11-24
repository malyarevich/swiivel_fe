import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  onChange: (value: any) => void;
  onTouched: () => void;
  focus = false;

  @ViewChild('input', {static: true}) input: ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  writeValue(value: string): void {
    this.renderer.setProperty(this.input.nativeElement, 'value', value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }

  focusInput(): void {
    if (this.input) { this.input.nativeElement.focus(); }
  }

  onFocus(): void {
    this.focus = true;
  }

  isEmpty(): boolean {
    return !this.focus && !this.input.nativeElement.value;
  }

  _onTouched(): void {
    this.focus = false;
    this.onTouched();
  }

}
