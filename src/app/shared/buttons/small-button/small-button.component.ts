import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IconsEnum } from '@shared/icons.enum';

@Component({
  selector: 'sw-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.scss']
})

export class SmallButtonComponent implements OnInit {
  @Input() text?: string;
  @Input() icon?: IconsEnum;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  public iconClass: string;

  constructor() {
  }

  public ngOnInit(): void {
    this.iconClass = 'fas ' + this.icon + ' small-button__icon';
  }

  public onButtonClick(): void {
    this.onClick.emit();
  }

}
