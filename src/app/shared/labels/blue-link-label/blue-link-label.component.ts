import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sw-blue-link-label',
  templateUrl: './blue-link-label.component.html',
  styleUrls: ['./blue-link-label.scss']
})

export class BlueLinkLabelComponent {
  @Input() label = 'label';
  @Output() labelClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  public clickOnLabel(deletedId: number): void {
    this.labelClick.emit();
  }
}
