import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconsEnum } from '@shared/enums/icons.enum';

const colors = [
  '#3CA476',
  '#909090',
  '#9BA2CB',
  '#CD690E'
];

@Component({
  selector: 'sw-small-dropdown-button',
  templateUrl: './small-dropdown-button.component.html',
  styleUrls: ['./small-dropdown-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SmallDropdownButtonComponent implements OnInit {
  @Input() title?: string;
  @Input() items: [any];
  @Input() selectedItem: any;
  @Input() value: any = null;
  @Output() onChangeField = new EventEmitter<any>();

  public isDropDownOpen = false;

  constructor( ) {
  }

  ngOnInit() {
  }

  changeDropdownVisible(): void {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  selectItem(item: any): void {
    this.selectedItem = item;
    this.onChangeField.emit(item);
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  getIconClass(): string {
    const arrowClass = this.isDropDownOpen ? IconsEnum.ARROW_UP : IconsEnum.ARROW_DOWN;
    return 'fas ' + arrowClass + ' small-dropdown-button__button--icon';
  }

  getListButtonClass(item: any): string {
    return item === this.selectedItem ?
      'small-dropdown-button__item-button small-dropdown-button__item-button--selected' : 'small-dropdown-button__item-button';
  }

  getButtonColor(): string {
    const index = this.items.indexOf(this.selectedItem);
    if (index > 3) {
      return colors[index - (Math.floor(index / 4) * 4)];
    } else {
      return colors[index];
    }
  }

}
