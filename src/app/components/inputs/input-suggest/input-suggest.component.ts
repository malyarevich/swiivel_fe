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
          this.filteredOptions = this.options.filter((option) => option['title'].toLowerCase().startsWith(value.toString().toLowerCase()));
        } else {
          this.filteredOptions = this.options;
        }
        if (this.filteredOptions.length > 1) {
          if (!this.dropdown.isOpened) this.dropdown.showPopup();
        } else if (this.filteredOptions.length === 1) {
          if (this.filteredOptions[0].title === value) {
            this.onChange(this.filteredOptions[0].value);
          }
        }
      } else {
        this.filteredOptions = this.options;
        this.dropdown.close()
      }
      if (this.onChange) this.onChange(value);
      this.cdr.detectChanges()
    });
  }

  onSelected(index) {
    let selectedOption = this.filteredOptions[index];
    this.setValue(selectedOption);
  }

  onSelectedValue(value) {
    if (value === null) {
      this.control.reset();
    } else {
      let selectedOption = this.filteredOptions.find(option => option.title === value || option.value === value);
      if (selectedOption) {
        this.setValue(selectedOption);
      }
    }
  }

  setValue(selectedOption) {
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