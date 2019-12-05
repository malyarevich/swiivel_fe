import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'sw-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent implements ControlValueAccessor, OnInit {
  public _type = 'text';
  public _mode = 'text';
  public _style = 'button';
  @Input() autofocus: boolean;
  @Input() autocomplete: string;
  @Input() set type(inputType: string) {
    this._type = inputType;
    if (this._type === 'email') this._mode = 'email';
    else if (this._type === 'numeric') this._mode = 'numeric';
    else if (this._type === 'tel') this._mode = 'tel';
    else this._mode = 'text';
  }
  @Input() set mode(inputMode: string) {
    this._mode = inputMode;
  }
  @Input() set style(styleType: string) {
    this._style = styleType;
  }
  @Input() disabled: boolean;
  @Input() set readonly(readOnly: boolean) {
    if (readOnly) {
      this.control.control.disable();
    } else {
      this.control.control.enable();
    }
  }
  @Input() isSearch = false;
  @Input() isClearable = false;
  @Input() trimStart: boolean;
  @Output('blur') onBlur = new EventEmitter<any>();
  @Output('focus') onFocus = new EventEmitter<any>();

  @ViewChild('input', { static: true }) input: ElementRef;

  writeValue = (value: string) => {};
  registerOnChange = (fn: any) => {};
  registerOnTouched = (fn: any) => {};

  constructor(
    private cdr: ChangeDetectorRef,
    @Self() @Optional() public control: NgControl
  ) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    if (this.autofocus) {
      this.focus();
    }
    this.control.statusChanges.subscribe(() => {
      this.cdr.markForCheck();
    });
    this.control.valueChanges.subscribe((v) => {
      if (!!v && this.trimStart) {
        this.control.control.setValue(v.trimStart(), {emitEvent: false});
      } else {
        this.control.control.setValue(v, {emitEvent: false});
      }
    });
  }

  public focus() {
    this.input.nativeElement.focus();
  }

  public isEmpty(): boolean {
    if (this.control.control.value && this.control.control.value.toString()) {
      return this.control.control.value.length === 0;
    }
    return true;
  }

  public isSearchInput(): boolean {
    return !!this.isSearch;
  }

  public clear(): void {
    this.control.control.reset();
    this.input.nativeElement.focus();
    this.cdr.markForCheck();
  }
}
