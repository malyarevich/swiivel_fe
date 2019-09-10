import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconsEnum } from '@shared/enums/icons.enum';
import { SizesEnum } from '@shared/enums/sizes.enum';

@Component({
  selector: 'sw-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.scss']
})

export class IconButtonComponent implements OnInit {
  @Input() icon: IconsEnum;
  @Input() size ? = SizesEnum.SMALL;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  public iconClass: string;
  public sizes = SizesEnum;

  constructor() {
  }

  public ngOnInit(): void {
    this.iconClass = 'fas ' + this.icon;
  }

  public onButtonClick(): void {
    this.onClick.emit();
  }

}
