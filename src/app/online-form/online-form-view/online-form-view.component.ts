import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '@app/models/data-collection/form';
import { Observable, Subscription } from 'rxjs';
import {
  IMainMenuNames,
  IMenuItems,
  mainMenuNames,
  menuItems
} from '../models/menu.model';

@Component({
  selector: 'sw-online-form-view',
  templateUrl: './online-form-view.component.html',
  styleUrls: ['./online-form-view.component.scss']
})
export class OnlineFormViewComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: any;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  @Output() onGoToTab: EventEmitter<any> = new EventEmitter();

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;
  ngOnInit() {}

  getPageTitle(): string {
    return menuItems.find(item => {
      return item.name === this.currentPosition.page;
    }).title;
  }

  getCurrentPage(): string {
    return this.currentPosition.page;
  }

  getCurrentTab(): string {
    return this.currentPosition.tab;
  }

  getPageTime(): number {
    return menuItems.find(item => {
      return item.name === this.currentPosition.page;
    }).time;
  }

  isShow(page, tabId): boolean {
    return (
      this.currentPosition.page === page &&
      this.currentPosition.tab === tabId
    );
  }

  goToTab(tabIndex) {
    this.onGoToTab.emit(tabIndex);
  }
}
