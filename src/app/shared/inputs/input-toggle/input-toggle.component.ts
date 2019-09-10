import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sw-input-toggle',
  templateUrl: './input-toggle.component.html',
  styleUrls: ['./input-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputToggleComponent),
      multi: true
    }
  ]
})

export class InputToggleComponent implements ControlValueAccessor {

  constructor(
    private renderer: Renderer2
  ) {}

  @ViewChild('input', {static: true}) input: ElementRef;
  private onTouched: () => void;

  private onChange: Function = (value) => {
    console.log('onc');
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

  public writeValue(value: boolean): void {
    this.renderer.setProperty(this.input.nativeElement, 'checked', value);
  }

  public onInputChange() {
    this.onChange(this.input.nativeElement.checked);
  }

}
