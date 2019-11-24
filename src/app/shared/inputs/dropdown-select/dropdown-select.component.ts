import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
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
  ViewChildren
} from '@angular/core';
import { Popup } from '@app/core/popup.service';
import { isNumber, isObjectLike, isString } from 'lodash';
import { SelectOptionDirective } from './option.directive';

@Component({
  selector: 'sw-dropdown-select',
  exportAs: 'dropdown',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['dropdown-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownSelectComponent {
  @Input() noneColor = false;
  @Input() set value(val: any) {
    let selectedValue;
    if (isString(val)) {
      selectedValue = val;
    } else if (isObjectLike(val)) {
      if ('title' in val) {
        selectedValue = val.title;
      } else {
        selectedValue = val.valueOf();
      }
    }
    if (selectedValue) {
      const index = this.items.indexOf(selectedValue);
      if (index !== 1) {
        this.selectedIndex = index;
      } else {
        this.selectedIndex = null;
      }
    }
  }

  @Input() set options(opts: any[]) {
    if (opts && opts.length > 0) {
      if (isString(opts[0])) {
        this.items = opts;
      } else if (isNumber(opts[0])) {
        this.items = opts;
      } else if (isObjectLike(opts[0])) {
        this.items = opts.map((opt) => {
          if ('title' in opt) {
            return opt.title;
          } else {
            return opt.valueOf();
          }
        });
      } else {
        console.error('Unknown option type');
      }
      this.cdr.markForCheck();
    } else {
      this.close();
    }
  }

  constructor(
    private popup: Popup,
    private cdr: ChangeDetectorRef
  ) {}

  get isOpened() {
    return this._ref !== null;
  }
  private _ref = null;
  items = [];
  selectedIndex = null;

  @ViewChildren(SelectOptionDirective) selectOptions: QueryList<SelectOptionDirective>;
  keyManager: ActiveDescendantKeyManager<SelectOptionDirective>;

  @Output() selected = new EventEmitter<number>();
  @Output() selectedValue = new EventEmitter<any>();
  @Input() panelClass = 'dropdown-overlay';
  @Input() disabled = false;

  @ViewChild('list', { static: false }) list;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    event.stopImmediatePropagation();
    if (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (this.keyManager && this.keyManager.activeItem) {
          this.selectedValue.emit(this.keyManager.activeItem.option);
        }
        this.close();
        this.cdr.markForCheck();
      } else if (this.keyManager && event.key === 'ArrowUp') {
        this.keyManager.setPreviousItemActive();
        this.cdr.markForCheck();
      } else if (event.key === 'ArrowDown') {
        if (this.keyManager) {
          if (this._ref) {
            if (this.keyManager.activeItem === null) {
              this.keyManager.setActiveItem(0);
              this.cdr.markForCheck();
            } else {
              this.keyManager.setNextItemActive();
              this.cdr.markForCheck();
            }
          } else {
            this.showPopup();
          }
        }
      } else if (event.key === 'Escape') {
        this.selectedValue.emit(null);
        this.close();
      }
    }
 }

  isSelected(i) {
    return this.selectedIndex === i;
  }

  select(i): void {
    this.selectedIndex = i;
    this.selected.emit(this.selectedIndex);
    if (this._ref) { this._ref.close(); }
    this.cdr.markForCheck();
  }

  toggle() {
    if (this._ref) {
      this._ref.close();
    } else {
      this.showPopup();
    }
  }

  close(): void {
    if (this._ref) { this._ref.close(); }
  }

  showPopup(): void {
    if (this.items.length > 0) {
      this._ref = this.popup.open({
        origin: this.holder,
        content: this.list,
        panelClass: this.panelClass
      });
      this.keyManager = new ActiveDescendantKeyManager(this.selectOptions).withWrap().withTypeAhead();

      this._ref.afterClosed$.subscribe(() => {
        this._ref = null;
        this.keyManager = null;
        this.cdr.markForCheck();
      });
    }
  }

}
