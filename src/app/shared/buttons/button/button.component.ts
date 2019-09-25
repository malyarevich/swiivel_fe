import { Component, Input } from '@angular/core';
import { ColorsEnum } from '@shared/colors.enum';

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
  public colors = ColorsEnum;

  constructor() { }
}
