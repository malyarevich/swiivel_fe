import {
  Component,
  OnInit,
  // Input,
  // forwardRef
} from '@angular/core';
// import {
//   NG_VALUE_ACCESSOR,
//   ControlValueAccessor
// } from '@angular/forms';

@Component({
  selector: 'app-toggle-checkbox-field',
  templateUrl: './toggle-checkbox-field.component.html',
  styleUrls: ['./toggle-checkbox-field.component.scss'],
  // providers: [{
  //   provide: NG_VALUE_ACCESSOR,
  //   useExisting: forwardRef(() => ToggleCheckboxFieldComponent),
  //   multi: true
  // }]
})
export class ToggleCheckboxFieldComponent implements OnInit {
  // @Input() disabled: boolean;
  // @Input() id: string;
  // @Input() label = '';
  // @Input() isInvalid = false;
  //
  isSelected: boolean;

  constructor() {}

  ngOnInit() {}

  // writeValue(obj: any): void {
  //   this.isSelected = obj;
  // }
  //
  // registerOnChange(fn: any): void {
  //   this.onChange = fn;
  // }
  //
  // registerOnTouched(fn: any): void {
  //   this.onTouched = fn;
  // }
  //
  // setDisabledState(isDisabled: boolean): void {
  //   this.disabled = isDisabled;
  // }
  //
  // private onChange = (_: any) => {};
  // private onTouched = () => {};
  //
  // toggleCheckbox() {
  //   if (this.disabled) {
  //     return;
  //   }
  //   this.isSelected = !this.isSelected;
  //   this.onChange(this.isSelected);
  // }
}
