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
  @Input() trimStart = true;
  @Output() blur = new EventEmitter<any>();

  writeValue = (value: string) => {};
  registerOnChange = (fn: any) => {};
  registerOnTouched = (fn: any) => {};
  
  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    @Self() @Optional()  public control: NgControl
  ) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    if (this.autofocus) {
      this.input.nativeElement.focus();
    }
    this.control.statusChanges.subscribe(() => {
      this.cdr.markForCheck();
    })
  }

  public get value() {
    return this.control.control ? this.control.control.value: null;
  }
  public isEmpty(value: string = ''): boolean {
    return value && value.length === 0;
  }

  

  public clear(): void {
    this.control.control.reset();
    this.input.nativeElement.focus();
  }

  onChange(): void {
    if (this.trimStart) {
      this.control.control.setValue(this.value.trimStart());
    }
  }

}
