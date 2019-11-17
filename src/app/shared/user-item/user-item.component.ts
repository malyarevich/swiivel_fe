import { Component, Input } from '@angular/core';
import { UserItem } from '@models/user-item';
import { ButtonSizeEnum } from '@shared/buttons/buttonSize.enum';

@Component({
  selector: 'sw-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})

export class UserItemComponent {
  @Input() isRoleShown = true;
  @Input() userItem: UserItem;
  @Input() size: ButtonSizeEnum = ButtonSizeEnum.DEFAULT;

  constructor() {}
}
