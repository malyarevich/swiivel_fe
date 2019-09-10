import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
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
  @Input('readonly') set readonly(isReadonly: boolean) {
    if (!!isReadonly) {
      this.renderer.setAttribute(this.input.nativeElement, 'readonly', 'readonly');
    } else {
      this.renderer.removeAttribute(this.input.nativeElement, 'readonly');
    }
  }

  constructor(private renderer: Renderer2) {

  }
  onTouched: Function;
  @ViewChild('input', {static: true}) input: ElementRef;
  @Input() rows = 4;
  @Input() cols = 30;
  onChange: Function = (_: string) => {};

  setDisabledState?(isDisabled: boolean): void {
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

  ngOnInit() {
  }


  changed(event?: Event) {
    this.onChange(this.input.nativeElement.value);
  }

}
