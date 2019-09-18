import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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

  public sizes = SizesEnum;

  constructor() {}
}
