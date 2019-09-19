import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, Renderer2, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { DropdownSelectComponent } from '../dropdown-select/dropdown-select.component';

@Component({
  selector: 'sw-input-suggest',
  templateUrl: './input-suggest.component.html',
  styleUrls: ['./input-suggest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSuggestComponent),
      multi: true
    }
  ]
})

export class InputSuggestComponent implements ControlValueAccessor {
  onBlur(e) {
    this.dropdown.close();
  }
  @ViewChild('dropdown', {static: true}) dropdown: DropdownSelectComponent;
  @Input() readonly: boolean;
  @Input() options: any[] = [];
  filteredOptions: any[];
  control = new FormControl();

  onChange: (value: any) => void;
  onTouched: () => void;

  constructor(
    private cdr: ChangeDetectorRef
  ) {

    this.control.valueChanges.subscribe((value) => {
      if (this.options.length > 0 && value) {
        if (value.toString().length > 0) {
          this.filteredOptions = this.options.filter((option) => option['title'].toLowerCase().includes(value.toString().toLowerCase()));
        } else {
          this.filteredOptions = this.options;
        }
        if (this.filteredOptions.length > 0) {
          if (!this.dropdown.isOpened) this.dropdown.showPopup();
        }
      } else {
        this.filteredOptions = this.options;
        this.dropdown.close()
      }
      if (this.onChange) this.onChange(value);
      this.cdr.detectChanges()
    });
  }

  setValue(value) {
    let selectedOption = this.filteredOptions[value];
    this.control.setValue(selectedOption.title);
    this.onChange(selectedOption.value);
  }

  public isEmpty(value: string): boolean {
    return !(value && value.trim().length > 0);
  }

  public setDisabledState(isDisabled: boolean): void {
    this.control.disable();
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public writeValue(obj: any): void {
    this.control.setValue(obj);
  }

}
