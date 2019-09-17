import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Popup } from '@core/popup.service';
import { isObjectLike, isString } from 'lodash';


@Component({
  selector: 'sw-dialog',
  exportAs: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  private _ref = null;
  @Output() closed = new EventEmitter<boolean>();
  @Input() title = 'Dialog title';
  @Input() action = 'Dialog button';

  @ViewChild('list', { static: false }) list;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;

  constructor(
    private popup: Popup,
    private cdr: ChangeDetectorRef
  ) {

  }

  get isOpened() {
    return this._ref !== null;
  }

  toggle() {
    if (this._ref) { this._ref.close(); }
    else { this.showPopup(); }
  }

  close(action?: boolean) {
    this._ref.close({action: !!action});
  }

  open() {
    if (!this.isOpened) {
      this.showPopup();
    } else {
      console.error('Dialog already opened');
    }
  }

  private showPopup(): void {
    this._ref = this.popup.open({
      origin: null,
      content: this.list,
      panelClass: 'centered-panel'
    });
    this._ref.afterClosed$.subscribe((result) => {
      let cancelled = true;
      if (result.data && !!result.data.action) { cancelled = false; }
      this._ref = null;
      this.closed.emit(!cancelled);
      this.cdr.markForCheck();
    });
  }

}
