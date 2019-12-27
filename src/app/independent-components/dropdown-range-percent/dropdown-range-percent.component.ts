import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit, Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Popup } from '@app/core/popup.service';
import { PopupRef } from '@core/components/popup/popup.ref';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Options } from 'ng5-slider';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const DROPDOWN_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownRangePercentComponent),
  multi: true,
};

@Component({
  selector: 'sw-dropdown-range-percent',
  templateUrl: './dropdown-range-percent.component.html',
  styleUrls: ['dropdown-range-percent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DROPDOWN_CONTROL_ACCESSOR],
})
export class DropdownRangePercentComponent implements OnInit, ControlValueAccessor, OnDestroy {
  constructor(private popup: Popup, private cdr: ChangeDetectorRef, private fb: FormBuilder) {
    this.selectedRange = this.fb.group({
      from: new FormControl(0, Validators.required),
      to: new FormControl(100, Validators.required)
    });
  }

  @Input() disabled = false;
  @Input() panelClass = 'dropdown-overlay';

  @Output() readonly change: EventEmitter<any> = new EventEmitter();

  private destroyed$ = new Subject();
  private ref: PopupRef;
  public fromValue = 0;
  public toValue = 60;
  public options: Options = {
    floor: 0,
    ceil: 100,
    hidePointerLabels: true,
    hideLimitLabels: true,
  };

  public inputValue = '';
  public searchIcon = faSearch;
  public timesIcon = faTimes;

  public selectedRange: FormGroup;
  @ViewChild('range', { static: false }) range;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;

  private onChange: (value: any) => void = (value: any) => {
    this.change.emit(value);
  };
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.fromValue = this.selectedRange.get('from').value;
    this.toValue = this.selectedRange.get('to').value;
  }

  writeValue(item?: number): void {
    this.cdr.markForCheck();
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  openRange(e: any): void {
    if (!(e && e.target && (
      (e.target.parentNode && e.target.parentNode.dataset && e.target.parentNode.dataset.icon &&
        e.target.parentNode.dataset.icon === 'times') ||
      (e.target.className && typeof e.target.className === 'string' && e.target.className.includes('times')) ||
      (e.target.parentNode && e.target.parentNode.className && typeof e.target.parentNode.className === 'string' &&
        e.target.parentNode.className.includes('times'))
    ))) {
      this.ref = this.popup.open({
        origin: this.holder,
        content: this.range,
        panelClass: 'dropdown-overlay'
      });
      this.ref.afterClosed$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
        this.ref = null;
        this.onTouched();
      });
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  clear(): void {
    this.fromValue = 0;
    this.toValue = 100;
    this.inputValue = '';
    if (this.ref) {
      this.ref.close();
    }
    this.onChange({from: this.fromValue, to: this.toValue});
    this.cdr.detectChanges();
  }

  apply(): void {
    this.inputValue = `${this.fromValue}% - ${this.toValue}%`;
    this.ref.close();
    this.onChange({from: this.fromValue, to: this.toValue});
    this.cdr.detectChanges();
  }
}
