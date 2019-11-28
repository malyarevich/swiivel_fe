import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  Renderer2,
  ViewChild,
  Optional,
  Self,
  OnInit} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'sw-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputTextComponent implements ControlValueAccessor, OnInit {
  @Input() autofocus: boolean;
  @Input() set autocomplete(value: string) {
    this._autocomplete = value;
  }
  public _autocomplete: string = null;
  public _type = 'text';
  public _style = 'button';
  @ViewChild('input', {static: true}) input: ElementRef;
  @Input() set type(inputType: string) {
    this._type = inputType;
  }
  @Input() set style(styleType: string) {
    this._style = styleType;
  }
  @Input() set readonly(readOnly: boolean) {
    this.control.control.disable();
  }
  @Input() isSearch = false;
  @Input() isClearable = false;
  @Input() trimStart: boolean;
  @Output() blur = new EventEmitter<any>();

  writeValue = (value: string) => {};
  registerOnChange = (fn: any) => {};
  registerOnTouched = (fn: any) => {};
  
  constructor(
    private cdr: ChangeDetectorRef,
    @Self() @Optional()  public control: NgControl
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
      if (this.trimStart) {
        this.control.control.setValue(v.trimStart(), {emitEvent: false});
      }
    })
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
