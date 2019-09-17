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
  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  public sizes = SizesEnum;

  constructor() {}

  public buttonClick(): void {
    this.click.emit();
  }
}
