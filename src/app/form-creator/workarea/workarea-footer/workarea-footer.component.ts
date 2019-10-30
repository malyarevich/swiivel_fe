import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sw-form-creator-workarea-footer',
  templateUrl: './workarea-footer.component.html',
  styleUrls: ['./workarea-footer.component.scss']
})

export class WorkareaFooterComponent {
  @Output() previousStep = new EventEmitter();
  @Output() nextStep = new EventEmitter();

  constructor() {
  }

}
