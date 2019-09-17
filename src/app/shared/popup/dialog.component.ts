import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Popup } from '@core/popup.service';
import { isString, isObjectLike } from 'lodash';


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
    if (this._ref) this._ref.close();
    else this.showPopup();
  }

  close(action?: boolean) {
    console.log(action)
    this._ref.close({click: !!action});
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
      origin: this.holder,
      content: this.list,
      panelClass: 'centered-panel'
    });
    this._ref.afterClosed$.subscribe((result) => {
      this._ref = null;
      console.log(result)
      this.closed.emit(result);
      this.cdr.markForCheck();
    });
  }

}
