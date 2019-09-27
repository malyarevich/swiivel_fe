import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Renderer2, ViewChild, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sw-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxComponent),
      multi: true
    }
  ]
})

export class InputCheckboxComponent implements ControlValueAccessor {

  @ViewChild('input', {static: true}) input: ElementRef;
  @Output() inputClick = new EventEmitter();

  private onChange: (value: boolean) => void;
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

  public writeValue(value: boolean): void {
    this.renderer.setProperty(this.input.nativeElement, 'checked', value);
  }

  private toggle(): void {
    const checked = !!this.input.nativeElement.checked;
    this.renderer.setProperty(this.input.nativeElement, 'checked', !checked);
  }

  public onClick(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.inputClick.emit(event);
    this.onInputChange();
  }
  public onInputChange() {
    const checked = !!this.input.nativeElement.checked;
    this.onChange(checked);
  }

}
