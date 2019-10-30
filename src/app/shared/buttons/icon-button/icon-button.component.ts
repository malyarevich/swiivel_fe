import { Component, Input } from '@angular/core';
import { ButtonColorsEnum } from '../buttonColors.enum';
import { IconsEnum } from '@shared/icons.enum';
import { ButtonSizeEnum } from '@shared/buttons/buttonSize.enum';

@Component({
  selector: 'sw-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.scss']
})

export class IconButtonComponent {
  @Input() icon: IconsEnum;
  @Input() size: ButtonSizeEnum = ButtonSizeEnum.SMALL;
  @Input() color: ButtonColorsEnum = ButtonColorsEnum.GRAY;

  public sizes = ButtonSizeEnum;
  public colors = ButtonColorsEnum;

  constructor() {}
}
