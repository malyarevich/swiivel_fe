import { Component, forwardRef, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sw-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})

export class InputTextComponent implements ControlValueAccessor {

  @ViewChild('input', {static: true}) input: ElementRef;
  @Input() readonly: boolean;

  onChange: (value: any) => void;
  onTouched: () => void;

  constructor(
    private renderer: Renderer2
  ) {}

  public isEmpty(value: string): boolean {
    return !(value && value.trim().length > 0);
  }

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
    this.renderer.setProperty(this.input.nativeElement, 'value', obj);
  }

}
