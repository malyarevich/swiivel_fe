import { Component, Input } from '@angular/core';
import { ColorsEnum } from '@shared/colors.enum';
import { SizeButtonsEnum } from '@shared/size-buttons.enum';

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
  @Input() color ? = '#fff';
  @Input() border ? = 'none';
  @Input() padding: string;
  @Input() size ? = SizeButtonsEnum.DEFAULT;

  public sizeButton = SizeButtonsEnum;

  public colors = ColorsEnum;

  constructor() { }
}
