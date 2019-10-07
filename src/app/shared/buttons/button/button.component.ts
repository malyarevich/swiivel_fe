import { Component, Input } from '@angular/core';
import { ColorsEnum } from '@app/shared/colors.enum';
import { SizeButtonsEnum } from '@app/shared/size-buttons.enum';

@Component({
  selector: 'sw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() disabled: boolean;
  @Input() name: string;
  @Input() value: any;
  @Input() style ? = 'purple';
  @Input() size ? = SizeButtonsEnum.DEFAULT;

  public sizeButton = SizeButtonsEnum;

  public colors = ColorsEnum;

  constructor() { }
}
