import { Component, OnInit, TemplateRef } from '@angular/core';
import { PopupRef, PopupContent } from './popup.ref';

@Component({
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  renderMethod: 'template' | 'component' = 'component';
  content: PopupContent;
  context;

  constructor(private popupRef: PopupRef) {
  }

  ngOnInit() {
    this.content = this.popupRef.content;

    if (this.content instanceof TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popupRef.close.bind(this.popupRef)
      }
    }

  }
}
