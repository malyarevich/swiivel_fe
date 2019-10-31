import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  Output,
  Renderer2,
<<<<<<< src/app/shared/inputs/input-file/input-file.component.ts
  ViewChild} from '@angular/core';
=======
  ViewChild } from '@angular/core';
>>>>>>> src/app/shared/inputs/input-file/input-file.component.ts
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpService } from '@app/core/http.service';

@Component({
  selector: 'sw-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  exportAs: 'upload',
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
  file: File;
  onTouched: () => void;
  onChange: (val: any) => void;
  disabled = false;
  @Input() method = 'POST';
  @Input() acceptFileTypes = '*';
  @Input('preupload') endpoint: string;
  @Input('data') data: any = null;
  @Input('maxSize') MAX_SIZE = 100000;
  @Output('response') response = new EventEmitter();
  @Output('progress') progress = new EventEmitter();
  @Output('selected') selected = new EventEmitter();
  @Output() error = new EventEmitter();
  @ViewChild('input', {static: true}) input: ElementRef<HTMLInputElement>;
  @HostListener('window:drop', ['$event']) public onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.onFileAdded(event.dataTransfer.files[0]);
  }

  @HostListener('window:dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('window:dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  openDialog() {
    this.input.nativeElement.click();
  }
  resetField() {
    this.input.nativeElement.value = '';
    this.file = null;
  }
  onFileAdded(dropped?) {
    if (this.disabled) { return false; }
    let selectedFile = null;
    if (dropped) {
      selectedFile = dropped;
    } else {
      selectedFile = this.input.nativeElement.files[0];
    }
    if (selectedFile) {
      if (selectedFile.size > this.MAX_SIZE * 1024 * 1024) {
        console.error(`Filesize is too big. Allowed max is ${this.MAX_SIZE} MB`);
        this.resetField();
      } else {
        this.onFileSelected(selectedFile);
        // ? this.resetField();
      }
    }
  }

  onFileSelected(file: File) {
    this.selected.emit(file);
    if (this.endpoint) {
      if (this.method) {
        this.http.upload(this.endpoint, file, this.method, false, this.data).subscribe((response) => {
          if (response.type && response.type === 1) {
            this.progress.emit({loaded: response.loaded, total: response.total});
          } else if ('file_path' in response) {
            this.response.emit({...response});
            this.onChange(response);
          } else if (Array.isArray(response) && response.length && response[0].toLowerCase() === 'success') {
            this.response.emit({...response});
            this.onChange(response);
          }
        }, (error) => {
          this.error.emit(error);
        });
      }
    } else {
      this.onChange(file);
    }
  }

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private http: HttpService
  ) {
  }

  public focus() {
    this.renderer.selectRootElement(this.input.nativeElement).focus();
  }

  public onBlur(event: Event) {
    this.onTouched();
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public writeValue(obj: any): void {
    if (obj) { this.selected.emit(obj); }
  }

}
