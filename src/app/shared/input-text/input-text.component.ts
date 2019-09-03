import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'sw-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputTextComponent implements ControlValueAccessor {

  @ViewChild('input', {static: true}) input: ElementRef;

  private onChange: (value: any) => void;
  private onTouched: () => void;

  constructor(
    @Optional() @Self() public control: NgControl,
    private renderer: Renderer2
  ) {
    this.control.valueAccessor = this;
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

  public onInputChange() {
    console.log(this.control);
    this.onChange(this.input.nativeElement.value);
  }

}
