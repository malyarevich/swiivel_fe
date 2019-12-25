import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupRef } from '@app/core/components/popup/popup.ref';
import { Popup } from '@app/core/popup.service';
import { FormService } from '@app/form/form.service';

@Component({
  selector: 'sw-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  private ref: PopupRef;
  id = 'widget-list';
  dropListsIds = [];
  dragFormats = [
    // {
    //   type: 114,
    //   name: 'New section',
    //   isExpanded: true,
    //   pathId: 'New section114',
    //   options: {
    //     size: 3,
    //     required: false,
    //     unique: false,
    //     hideLabel: false,
    //     readonly: false
    //   }
    // },
    {"type":114,"name":"Section","options":{"size": 3},"fields":[]},
    {"type":113,"name":"Group","options":{"hideTitle":false,"size":3},"fields":[]}
    // {
    //   type: 113,
    //   name: 'New group',
    //   isExpanded: true,
    //   pathId: 'New group113',
    //   options: {
    //     size: 3,
    //     required: false,
    //     unique: false,
    //     hideLabel: false,
    //     readonly: false
    //   }
    // }
  ];
  sectionName = 'Section';
  @ViewChild('holder', { static: false }) holder;
  @ViewChild('widgetContent', { static: false }) widgetContent;

  constructor(
    private popup: Popup,
    private service: FormService
  ) {
    this.dragFormats = [
      this.service.fieldTypes.schema.find(schema => schema.type === 114),
      this.service.fieldTypes.schema.find(schema => schema.type === 113),
    ]
    this.service.dropLists$.subscribe((ids) => {
      this.dropListsIds = Array.from(ids);
    });
  }

  ngOnInit() {
  }

  get isActive(): boolean {
    return !!this.ref;
  }

  widgetToggle(): void {
    if (this.ref) {
      this.ref.close();
    } else {
      this.openWidget();
    }
  }

  public close() {
    if (this.ref) this.ref.close();
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
    });
  }

}
