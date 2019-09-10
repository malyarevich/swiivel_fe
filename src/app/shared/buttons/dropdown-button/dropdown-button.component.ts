import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IconsEnum } from '@shared/enums/icons.enum';

@Component({
  selector: 'sw-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['dropdown-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DropdownButtonComponent {
  @Input() title = 'Button title';
  @Input() items: [any];
  @Output() changeField = new EventEmitter();

  public opened = false;
  public IconsEnum = IconsEnum;

  constructor() {}

  selectItem(item: any): void {
    this.changeField.emit(item);
    this.opened = false;
  }
}
