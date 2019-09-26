import { Component, EventEmitter, Output } from '@angular/core';
import { ColorsEnum } from '@shared/colors.enum';

@Component({
  selector: 'sw-form-creator-workarea-footer',
  templateUrl: './workarea-footer.component.html',
  styleUrls: ['./workarea-footer.component.scss']
})

export class WorkareaFooterComponent {
  @Output() previousStep = new EventEmitter();
  @Output() nextStep = new EventEmitter();

  public colors = ColorsEnum;

  constructor() {
  }

}
