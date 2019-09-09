import { Component, OnInit, forwardRef, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2, ViewEncapsulation, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sw-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextareaComponent),
      multi: true
    }
  ],
})
export class InputTextareaComponent implements OnInit, ControlValueAccessor {
  onChange: Function = (_: string) => {};
  onTouched: Function;
  @ViewChild('input', {static: true}) input: ElementRef;
  @Input() rows: number = 4;
  @Input() cols: number = 30;
  @Input('readonly') set readonly(isReadonly: boolean) {
    if (!!isReadonly) {
      this.renderer.setAttribute(this.input.nativeElement, 'readonly', 'readonly');
    } else {
      this.renderer.removeAttribute(this.input.nativeElement, 'readonly');
    }
    console.log(isReadonly);
    console.log(this.input.nativeElement);
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log('disable t');
    this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  writeValue(obj: any): void {
    this.renderer.setProperty(this.input.nativeElement, 'value', obj);
  }

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
  }


  changed(event?: Event) {
    this.onChange(this.input.nativeElement.value);
  }

}
