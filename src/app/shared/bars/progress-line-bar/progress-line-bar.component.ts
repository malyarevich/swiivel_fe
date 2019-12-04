import { Component, Input } from '@angular/core';
import { ButtonColorsEnum } from '@shared/buttons/buttonColors.enum';

@Component({
  selector: 'sw-progress-line-bar',
  templateUrl: './progress-line-bar.component.html',
  styleUrls: ['./progress-line-bar.component.scss']
})

export class ProgressLineBarComponent {
  @Input() value = 0;
  @Input() color: ButtonColorsEnum = ButtonColorsEnum.PURPLE;

  public colors = ButtonColorsEnum;

  constructor() {}
}
