import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sw-input-button-group',
  templateUrl: './input-button-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputButtonGroupComponent),
      multi: true
    }
  ]
})

export class InputButtonGroupComponent implements ControlValueAccessor {

  @Input('options') buttons;

  @ViewChild('input', {static: true}) input: ElementRef;

  private onChange: (value: any) => void;
  private onTouched: () => void;
  private value: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  public isActive(value: any) {
    return this.value === value;
  }

  public setDisabledState(isDisabled: boolean): void {
    const stateValue = isDisabled ? 'none' : 'inherit';
    this.renderer.setStyle(this.input.nativeElement, 'pointer-events', stateValue);
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public writeValue(value: any): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  public onInputChange(value: any) {
    this.onChange(value);
    this.value = value;
    this.cdr.markForCheck();
  }

}
