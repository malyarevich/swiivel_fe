import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, ESCAPE, UP_ARROW } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  Self,
  Optional,
  TemplateRef,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked
} from '@angular/core';
import { Popup } from '@app/core/popup.service';
import { isObjectLike, isString, isNumber, isArrayLike } from 'lodash';
import { OptionDirective } from './option.directive';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'sw-select',
  exportAs: 'select',
  templateUrl: './input-select.component.html',
  styleUrls: ['input-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSelectComponent implements ControlValueAccessor, AfterContentInit {
  // ngAfterContentChecked(): void {
  //   throw new Error("Method not implemented.");
  // }
  ngAfterContentInit() : void {
    // this.selectedIndex = this.control.control.value;
    this.cdr.detectChanges();
  }
  
  _options: any[] = [];
  _ref;
  disabled: boolean;
  selectedIndex: number;
  keyManager: ActiveDescendantKeyManager<OptionDirective>;
  @Input() displayWith = (option) => {
    return option.title;
  }
  @Input() returnAs = (option) => {
    return option.value;
  }
  @Input() set values(opts: any[]) {
    if (isArrayLike(opts)) {
      this._options = opts;//opts.map(this.displayWith);
      this.cdr.markForCheck();
    } else {
      console.error('Must provide options array');
    }
  }
  @ViewChildren(OptionDirective) options: QueryList<OptionDirective>;
  setDisabledState(isDisabled: boolean) {
    this.disabled = !!isDisabled
  }
  
  @ViewChild('list', { static: false }) list: TemplateRef<any>;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    event.stopImmediatePropagation();
    if (event) {
      if (event.code === 'ENTER') {
        event.preventDefault();
        if (this.keyManager && this.keyManager.activeItem) {
          this.onChange(this.keyManager.activeItem.option);
        }
        this.close();
        this.cdr.markForCheck();
      } else if (this.keyManager && event.code === 'ArrowUp') {
        this.keyManager.setPreviousItemActive();
        this.cdr.markForCheck();
      } else if (event.code === 'ArrowDown') {
        if (this.keyManager) {
          if (this.opened) {
            if (this.keyManager.activeItem === null) {
              this.keyManager.setActiveItem(0);
            } else {
              this.keyManager.setNextItemActive();
            }
            this.cdr.markForCheck();
          } else {
            this.open();
          }
        }
      } else if (event.code === 'Escape') {
        this.onChange(null);
        this.close();
      }
    }
  }
  
  
  @Output() select: EventEmitter<any>;
  

  constructor(private popup: Popup, private cdr: ChangeDetectorRef, @Self() @Optional() public control: NgControl) {
    this.keyManager = new ActiveDescendantKeyManager([]).withWrap().withTypeAhead();
    if (control) {
      control.valueAccessor = this;
    } else {
      this.select = new EventEmitter(true);
      this.onChange = (selected) => {
        this.select.emit(selected);
      };
    }
  }
  writeValue: (selected: any) => void = (selected: any) => {
    if (this.keyManager) {
      this.selectedIndex = selected;
      this.keyManager.setActiveItem(selected);
    } else if (this._options && this.selectedIndex !== -1) {
      this.selectedIndex = selected;
    }
    this.cdr.markForCheck();
  }
  onTouch: (_: any) => void;
  onChange: (_:any) => void;
  registerOnTouched = (fn: any) => {
    this.onTouch = fn;
  };
  registerOnChange = (fn: any) => {
    this.onChange = fn;
  }


  get opened() {
    return !!this._ref;
  }

  get title() {
    if (this.keyManager && this.keyManager.activeItemIndex !== -1) {
      let selected = this.keyManager.activeItemIndex;
        return this.displayWith(this._options[selected]);
    } else if (this._options) {
      if (this.control.value !== -1) {
        this.selectedIndex = this.control.value;
      }
      if (this._options[this.selectedIndex]) {
        return this.displayWith(this._options[this.selectedIndex]);
      }
    }
    return null;
  }
  

  

  onClick(item) {
    this.keyManager.setActiveItem(item);
    this.onChange(this.returnAs(item));
    this.selectedIndex = this.keyManager.activeItemIndex;
    this.close();
  }

  

  

  toggle() {
    if (this.opened) this.close();
    else this.open();
  }

  close(): void {
    if (this._ref) { this._ref.close(); }
  }

  open(): void {
    if (!this.disabled && this._options.length > 0) {
      this._ref = this.popup.open({
        origin: this.holder,
        content: this.list,
        panelClass: 'dropdown-overlay'
      });
      

      this._ref.afterClosed$.subscribe(() => {
        this._ref = null;
        // this.keyManager = null;
        this.cdr.markForCheck();
      });
    }
  }

}
