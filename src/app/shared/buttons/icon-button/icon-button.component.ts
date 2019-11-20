import { Component, Input } from '@angular/core';
import { ButtonColorsEnum } from '@shared/buttons/buttonColors.enum';
import { ButtonSizeEnum } from '@shared/buttons/buttonSize.enum';
import { IconsEnum } from '@shared/icons.enum';

@Component({
  selector: 'sw-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.scss']
})

export class IconButtonComponent {
  @Input() icon: IconsEnum;
  @Input() size: ButtonSizeEnum = ButtonSizeEnum.SMALL;
  @Input() color: ButtonColorsEnum = ButtonColorsEnum.GRAY;
  @Input() text: string;

  public sizes = ButtonSizeEnum;
  public colors = ButtonColorsEnum;

  constructor() {}
}
