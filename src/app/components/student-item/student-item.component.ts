import { Component, Input, OnInit } from '@angular/core';
import { UserItem } from '@models/user-item';

@Component({
  selector: 'sw-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss'],
})

export class StudentItemComponent implements OnInit {
  @Input() studentItem: UserItem;

  constructor(
  ) {}

  public ngOnInit(): void {
  }
}
