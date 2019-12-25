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
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { BehaviorSubject } from 'rxjs';

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
  private _readonly = false;
  protected _disabled = false;
  @Input() autofocus: boolean;
  @Input() autocomplete: string;
  @Input() placeholder = undefined;
  @Input() label = undefined;
  @Input() iconName = undefined;
  @Input() customErrors: string | string[] = undefined;
  @Input() get type() { return this._type; }
  set type(inputType: string) {
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
  @Input() get readonly() { return this._readonly; }
  set readonly(isReadonly: any) {
    this._readonly = coerceBooleanProperty(isReadonly);
  }
  @Input() get disabled() { return this._disabled; }
  set disabled(isDisabled: boolean) {
    this._disabled = coerceBooleanProperty(isDisabled);
    if (!!this._disabled) {
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

  public inputId: number;
  public $isShowClearIcon: BehaviorSubject<boolean> = new BehaviorSubject(false);

  writeValue = (value: string) => { };
  registerOnChange = (fn: any) => { };
  registerOnTouched = (fn: any) => { };

  constructor(
    private cdr: ChangeDetectorRef,
    @Self() @Optional() public control: NgControl
  ) {
    if (control) {
      control.valueAccessor = this;
    }
    this.inputId = Math.random() * 100;
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
        this.control.control.setValue(v.trimStart(), { emitEvent: false });
      } else {
        this.control.control.setValue(v, { emitEvent: false });
      }
      if (!!v) {
        this.$isShowClearIcon.next(true);
      } else {
        this.$isShowClearIcon.next(false);
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

  public clear(event: Event): void {
    this.control.control.reset();
    event.preventDefault();
    this.input.nativeElement.focus();
    this.cdr.markForCheck();
  }

  public getControl(): any | NgControl {
    return this.control;
  }

  public getCustomErrors(): string[] {
    return typeof this.customErrors === 'string' ? [this.customErrors] : this.customErrors;
  }

  onFocusInput(event: Event | any) {
    this.$isShowClearIcon.next(event.target.value.length > 0);
    this.onFocus.emit(event);
  }

  onBlurInput(event) {
    this.$isShowClearIcon.next(false);
    this.onBlur.emit(event);
  }
}
