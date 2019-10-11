import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form, IPagesPercent } from '@app/models/data-collection/form.model';
import {
  IMenuItems,
  IMainMenuNames,
  menuItems,
  mainMenuNames
} from "../models/menu.model";
import { ICurrentPosition, IFormNavigationState } from '../models/online-form.model';

@Component({
  selector: 'sw-online-form-menu',
  templateUrl: './online-form-menu.component.html',
  styleUrls: ['./online-form-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormMenuComponent implements OnInit {
  @Input() form: Form;
  @Input() pagesPercents: IPagesPercent[];
  @Input() formNavigationState: IFormNavigationState[];
  @Input() currentPosition: ICurrentPosition;

  @Output() onGoToPage: EventEmitter<any> = new EventEmitter;

  menuItems;

  hoveredItems = [];
  pathIconsFolder = "assets/images/icons/";

  constructor() {}

  ngOnInit() {
    this.menuItems = menuItems;
  }

  isShowMenuItem(itemName): boolean {
    const page = this.formNavigationState.find(page => {
      return page.page === itemName
    });
    return !!page;
  }

  getPercentByPageName(page): number {
    const currentPage = this.pagesPercents.find(item => {
      return item.page === page;
    });

    if(currentPage) {
      return currentPage['percent'];
    }
    return -1;
  }

  setHovered(itemName): void {
    this.hoveredItems[itemName] = true;
  }

  unsetHovered(itemName): void {
    this.hoveredItems[itemName] = false;
  }

  isHovered(itemName): boolean {
    return this.hoveredItems[itemName] === true;
  }

  isActivePage(itemName): boolean {
    return this.currentPosition.page === itemName;
  }

  setActiveMenuItem(itemName): void {
    this.onGoToPage.emit(itemName);
  }
}
