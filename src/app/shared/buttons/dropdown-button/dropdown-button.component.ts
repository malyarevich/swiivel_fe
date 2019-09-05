import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconsEnum } from '@shared/enums/icons.enum';

@Component({
  selector: 'sw-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['dropdown-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DropdownButtonComponent implements OnInit {
  @Input() title?: string;
  @Input() items: [any];
  @Output() onChangeField = new EventEmitter();

  public isDropDownOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

  changeDropdownVisible(): void {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  selectItem(item: any): void {
    this.onChangeField.emit(item);
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  getIconClass(): string {
    const arrowClass = this.isDropDownOpen ? IconsEnum.ARROW_UP : IconsEnum.ARROW_DOWN;
    return 'fas ' + arrowClass + ' dropdown-button__button--icon';
  }

  getButtonClass(): string {
    return this.isDropDownOpen ? 'dropdown-button__button dropdown-button__button--opened' : 'dropdown-button__button';
  }
}
