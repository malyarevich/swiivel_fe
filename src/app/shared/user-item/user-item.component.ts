import { Component, Input, OnInit } from '@angular/core';
import { UserItem } from '@models/user-item';

@Component({
  selector: 'sw-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})

export class UserItemComponent implements OnInit {
  @Input() userItem: UserItem;
  @Input() isRoleShown = true;

  constructor(
  ) {}

  public ngOnInit(): void {
  }
}
