import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  Renderer2,
  ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SizesEnum } from '@shared/sizes.enum';

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
  @Input() set autofocus(_value: boolean) {
    this.focus();
  }
  @Input() set autocomplete(value: string) {
    this._autocomplete = value;
  }
  public _autocomplete: string = null;
  public _type = 'text';
  public _style = 'button';
  @ViewChild('input', {static: true}) input: ElementRef;
  @Input() set type(inputType: string) {
    this._type = inputType;
  }
  @Input() set style(styleType: string) {
    this._style = styleType;
  }
  @Input() readonly: boolean;
  @Output() blur = new EventEmitter<any>();

  onChange: (value: any) => void;
  onTouched: () => void;

  constructor(
    private renderer: Renderer2,
  ) {
  }

  public focus() {
    this.renderer.selectRootElement(this.input.nativeElement).focus();
  }

  public isEmpty(value: string): boolean {
    return !(value && value.trim().length > 0);
  }

  public setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }

  public onBlur(event: Event) {
    this.onTouched();
    this.blur.emit(event);
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
