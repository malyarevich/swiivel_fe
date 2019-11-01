import { Component, Input } from '@angular/core';
import { ButtonColorsEnum } from '../buttonColors.enum';
import { ButtonExpandEnum } from '../buttonExpand.enum';
import { ButtonSizeEnum } from '../buttonSize.enum';

@Component({
  selector: 'sw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() color: ButtonColorsEnum = ButtonColorsEnum.PURPLE;
  @Input() disabled = false;
  @Input() expand: ButtonExpandEnum = ButtonExpandEnum.DEFAULT;
  @Input() name: string;
  @Input() size: ButtonSizeEnum = ButtonSizeEnum.DEFAULT;
  @Input() value: any;
  @Input() isRound = false;

  public colors = ButtonColorsEnum;
  public expands = ButtonExpandEnum;
  public sizes = ButtonSizeEnum;

  constructor() { }
}
