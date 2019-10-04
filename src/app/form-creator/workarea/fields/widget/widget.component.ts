import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PopupRef } from '@app/core/components/popup/popup.ref';
import { Popup } from '@app/core/popup.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sw-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, OnDestroy {

  private ref: PopupRef;
  private destroyed$ = new Subject()

  @ViewChild('holder', { static: false }) holder;
  @ViewChild('widgetContent', { static: false }) widgetContent;

  constructor(
    private popup: Popup
  ) { }

  ngOnInit() {
  }

  isActive(): boolean {
    return !!this.ref;
  }

  widgetTogle(): void {
    if (this.ref) {
      this.ref.close();
    } else {
      this.openWidget();
    }
  }

  openWidget() {
    this.ref = this.popup.open({
      origin: this.holder,
      content: this.widgetContent,
      location: 'center-down-left',
      panelClass: 'widget-dropdown'
    });
    this.ref.afterClosed$.pipe(takeUntil(this.destroyed$)).subscribe(result => {
      this.ref = null;
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
