import { Component, Input } from '@angular/core';
import { SizesEnum } from '@shared/sizes.enum';

@Component({
  selector: 'sw-main-spinner',
  templateUrl: './main-spinner.component.html',
  styleUrls: ['./main-spinner.component.scss']
})
export class MainSpinnerComponent {
  public size = SizesEnum;

  @Input() spinnerText: string;
  @Input() spinnerSize: SizesEnum = this.size.LARGE;

  constructor() { }
}
