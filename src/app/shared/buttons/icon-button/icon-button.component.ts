import { Component, Input } from '@angular/core';
import { ColorsEnum } from '@shared/colors.enum';
import { IconsEnum } from '@shared/icons.enum';
import { SizesEnum } from '@shared/sizes.enum';

@Component({
  selector: 'sw-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.scss']
})

export class IconButtonComponent {
  @Input() icon: IconsEnum;
  @Input() size ? = SizesEnum.SMALL;
  @Input() color ? = 'gray';

  public sizes = SizesEnum;
  public colors = ColorsEnum;

  constructor() {}
}
