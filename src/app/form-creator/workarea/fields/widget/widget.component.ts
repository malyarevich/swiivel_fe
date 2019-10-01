import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupRef } from '@app/core/components/popup/popup.ref';
import { Popup } from '@app/core/popup.service';

@Component({
  selector: 'sw-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  private ref: PopupRef;

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
    this.ref.afterClosed$.subscribe(result => {
      this.ref = null;
    })
  }

}
