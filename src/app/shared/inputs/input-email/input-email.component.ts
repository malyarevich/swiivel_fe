import { Component, OnInit, Renderer2, ViewChild, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const EMAIL_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputEmailComponent),
  multi: true
};

@Component({
  selector: 'sw-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
  providers: [EMAIL_CONTROL_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputEmailComponent implements OnInit, ControlValueAccessor {

  onChange: Function;
  onTouched: Function;

  @ViewChild('input', {static: true}) input: ElementRef;

  constructor(private renderer: Renderer2) { }

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