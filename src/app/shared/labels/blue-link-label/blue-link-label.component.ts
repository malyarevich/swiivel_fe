import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sw-blue-link-label',
  templateUrl: './blue-link-label.component.html',
  styleUrls: ['./blue-link-label.scss']
})

export class BlueLinkLabelComponent {
  @Input() label = 'label';
  @Output() labelClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  public clickOnLabel(): void {
    this.labelClick.emit(this.label);
  }
}
