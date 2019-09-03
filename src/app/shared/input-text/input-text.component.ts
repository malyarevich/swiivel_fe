import {
  Component,
  forwardRef,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
  Input,
  Injector, OnInit, Optional, Self
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';

@Component({
  selector: 'sw-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputTextComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string;

  @ViewChild('input', {static: true}) input: ElementRef;

  // private ngControl: NgControl;
  private onChange: (value: any) => void;
  private onTouched: () => void;
  private errors: [];
  // fc: any;
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private renderer: Renderer2
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.ngControl.statusChanges.subscribe((status) => {
      console.log(`Status changed ${status}`)
    })
  }

  public setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public writeValue(obj: any): void {
    this.renderer.setProperty(this.input.nativeElement, 'value', obj);
  }

  public onInputChange() {
    this.onChange(this.input.nativeElement.value);
  }

}
