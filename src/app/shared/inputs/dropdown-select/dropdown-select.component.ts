import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Popup } from '@core/popup.service';
import { isObjectLike, isString } from 'lodash';

@Component({
  selector: 'sw-dropdown-select',
  exportAs: 'dropdown',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['dropdown-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownSelectComponent {
  private _ref = null;
  items = [];
  selectedIndex = null;
  @Output() selected = new EventEmitter<number>();
  @Input() panelClass = 'dropdown-overlay';
  @Input() disabled = false;
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
    }
  }

  @ViewChild('list', { static: false }) list;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;

  constructor(
    private popup: Popup,
    private cdr: ChangeDetectorRef
  ) {}

  isSelected(i) {
    return this.selectedIndex === i;
  }

  select(i): void {
    this.selectedIndex = i;
    this.selected.emit(this.selectedIndex);
    this._ref.close();
    this.cdr.markForCheck();
  }

  get isOpened() {
    return this._ref !== null;
  }

  toggle() {
    if (this._ref) {
      this._ref.close();
    } else {
      this.showPopup();
    }
  }

  showPopup(): void {
    this._ref = this.popup.open({
      origin: this.holder,
      content: this.list,
      panelClass: this.panelClass
    });
    this._ref.afterClosed$.subscribe(() => {
      this._ref = null;
      this.cdr.markForCheck();
    });
  }

}
