import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PopupRef, PopupContent } from './popup.ref';

@Component({
  templateUrl: './popup.component.html'
})
export class PopupComponent implements OnInit {
  renderMethod: 'template' | 'component' = 'component';
  content: PopupContent;
  context;

  @ViewChild('template', {static: false}) template;

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
