import {Component, forwardRef, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sw-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true
    }
  ]
})

export class InputNumberComponent implements ControlValueAccessor {

  @Input() options: any;

  @ViewChild('input', {static: true}) input: ElementRef;

  private value: any;
  private onChange: (value: any) => void;
  private onTouched: () => void;

  constructor(
    private renderer: Renderer2
  ) {}

  public setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public writeValue(obj: any): void {
    this.value = obj;
    this.renderer.setProperty(this.input.nativeElement, 'value', obj);
  }

  public onKeyDown(e: KeyboardEvent) {
    const keyCodes = [69, 107, 109, 187, 189];
    if (keyCodes.includes(e.keyCode)) {
      e.preventDefault();
    }
  }

  public onInputChange(value: any): void {
    let regexp: RegExp;
    switch (this.options.type) {
      case 'decimal':
        regexp = new RegExp('\\d*\\.?\\d{0,' + this.options.places + '}');
        break;
      case 'percentage':
        regexp = new RegExp('\\d{0,3}');
        break;
      case 'currency':
        regexp = new RegExp('\\d*\\.?\\d{0,2}');
        break;
    }
    const result = regexp.exec(value);
    if (this.value !== result[0]) {
      this.value = result[0];
      this.onChange(this.value);
    }
    this.renderer.setProperty(this.input.nativeElement, 'value', this.value);
  }

}
