import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self
} from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'sw-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCheckboxComponent {
  @Input() target = 'label';
  @Input() isActive = true;
  @Input() definition = false;
  @Input()
  set check(v: boolean) {
    if (v !== undefined) { this.control.setValue(v, {emitEvent: false}); }
  }
  @Output() checked = new EventEmitter();
  control = new FormControl();
  @Input() isIndeterminate = false;
  private onChange: (value: boolean) => void;
  private onTouched: () => void;

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    } else {
      this.onChange = value => {
        this.checked.emit(value);
      };
    }
    this.control.valueChanges.subscribe(value => {
      if (this.onChange) {
        this.onChange(value);
      }
      this.checked.emit(value);
    });
  }

  public setDisabledState(isDisabled: boolean): void {
    if (!!isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public writeValue(value: boolean): void {
    this.control.setValue(value);
  }

  private toggle(): void {
    this.control.setValue(!this.control.value);
  }

  public onBlur(event) {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  public onClick(event: Event) {
    if ((event.target as HTMLElement).tagName !== 'INPUT' && this.isActive) {
      this.toggle();
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
