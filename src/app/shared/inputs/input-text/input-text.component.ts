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
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'sw-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent implements ControlValueAccessor, OnInit {
  @Input() autofocus: boolean;
  @Input() mask: string;
  @Input() autocomplete: string;
  public _type = 'text';
  public _style = 'button';
  @ViewChild('input', { static: true }) input: ElementRef;
  @Input() set type(inputType: string) {
    this._type = inputType;
  }
  @Input() set style(styleType: string) {
    this._style = styleType;
  }
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
    this.control.valueChanges.subscribe(v => {
      if (this.trimStart) {
        this.control.control.setValue(v.trimStart(), { emitEvent: false });
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
