import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ContentChild,
  ContentChildren,
  ElementRef, EventEmitter,
  forwardRef, HostBinding, HostListener, OnDestroy, OnInit, QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {ButtonComponent} from '@shared/button/button.component';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'sw-input-buttons-group',
  templateUrl: './input-buttons-group.component.html',
  styleUrls: ['./input-buttons-group.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputButtonsGroupComponent),
      multi: true
    }
  ]
})

export class InputButtonsGroupComponent implements AfterContentInit, ControlValueAccessor, OnDestroy {

  @ViewChild('input', {static: false}) input: ElementRef;

  @ContentChildren(ButtonComponent, {descendants: true}) buttons: QueryList<ButtonComponent>;

  private componentLoaded: Subject<void> = new Subject<void>();
  private componentDestroyed: Subject<boolean> = new Subject<boolean>();

  private onChange: (value: boolean) => void;
  private onTouched: () => void;

  constructor(
    private cd: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  ngAfterContentInit(): void {
    this.componentLoaded.next();
    // console.log(this.buttons);

    // this.input.nativeElement.querySelectorAll('button').forEach(button => {
    //   if (button.value === value) {
    //     button.classList.add('active');
    //   } else {
    //     button.classList.remove('active');
    //   }
    // });
  }

  // ngAfterViewInit(): void {
    // this.input.nativeElement.querySelectorAll('button').forEach(button => {
    //   if (button === selectedButton) {
    //     button.classList.add('active');
    //   } else {
    //     button.classList.remove('active');
    //   }
    // });
  // }

  @HostListener('click', ['$event.srcElement'])
  onButtonClicked(selectedButton) {
    this.input.nativeElement.querySelectorAll('button').forEach(button => {
      if (button === selectedButton) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
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

  public writeValue(value: any): void {
    this.componentLoaded
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(() => {
        const button = this.buttons.find(data => data.value === value);
        // button.classList
        // console.log(button);
        console.log(this.buttons);
        button.activeClass = 'active';
        this.cd.markForCheck();
        // console.log(button);
      });
    // this.setActive(value);
    // this.input.nativeElement.querySelectorAll('button').forEach(button => {
    //   if (button.value === value) {
    //     button.classList.add('active');
    //   } else {
    //     button.classList.remove('active');
    //   }
    // });
    // this.renderer.setProperty(this.input.nativeElement, 'checked', value);
    // this.buttons.forEach(button => {
    //   if (button.value === value) {
    //     console.log(button);
    //   }
    // });
  }

  public onInputChange() {
    this.onChange(this.input.nativeElement.checked);
  }

  ngOnDestroy(): void {

  }

}

