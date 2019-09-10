import { Component, OnInit, forwardRef, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
export class InputNumberComponent implements OnInit, ControlValueAccessor {
  onChange: Function = (_: string) => {};
  onTouched: Function;
  errors: [];
  @ViewChild('input', {static: true}) input: ElementRef;

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

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
  }


  changed(event: Event) {
    this.onChange(this.input.nativeElement.value);
  }

}
