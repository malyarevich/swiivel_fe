import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sw-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFileComponent),
      multi: true
    }
  ]
})

export class InputFileComponent implements ControlValueAccessor {

  @Input('options') fileOptions: any;

  @ViewChild('input', {static: true}) input: ElementRef;

  onChange: (value: any) => void;
  onTouched: () => void;

  selectedFile = null;

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  onFileSelected(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const fileData = {
          filename: file.name,
          filetype: file.type,
          value: reader.result
        };
        this.selectedFile = fileData;
        this.onChange(fileData);
        this.cdr.markForCheck();
      };
    } else {
      this.onChange(null);
      this.selectedFile = null;
    }
    this.onTouched();
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

}
