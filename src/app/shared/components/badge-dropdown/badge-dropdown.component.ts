import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-badge-dropdown',
  templateUrl: './badge-dropdown.component.html',
  styleUrls: ['./badge-dropdown.component.scss']
})
export class BadgeDropdownComponent implements OnInit {
  @Input() values;
  @Input() activeValue: string;
  @Output() changeValue: EventEmitter<any> = new EventEmitter<any>();

  public isOpenDropdown = false;

  constructor() { }

  ngOnInit() {}

  onDropdown() {
    this.isOpenDropdown = !this.isOpenDropdown;
  }

  onChooseValue(value) {
    this.activeValue = value;
    this.isOpenDropdown = false;
    this.changeValue.emit(this.activeValue);
  }
}
