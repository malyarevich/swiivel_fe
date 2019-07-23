import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Optional,
  Self,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-editable-field',
  templateUrl: './input-editable-field.component.html',
  styleUrls: ['./input-editable-field.component.scss']
})

export class InputEditableFieldComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() value: any = '';
  @Input() inputStyle: string = null;
  @Input() inputColor?: string = null;
  @Output() onChangeField = new EventEmitter();
  @ViewChild('input') input: ElementRef;

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {}

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange(value) {
    this.onChangeField.emit({ fieldValue: value, type: 'input' });
    return value;
  }
  onTouched() {}

  onPenClick(): void {
    this.input.nativeElement.focus();
  }

}
