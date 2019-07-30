import { Injectable, Type, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";
import { IActiveSections } from "src/app/models/vertical-data-collection/v-form-constructor/v-form-builder/active-section.model";

@Injectable()
export class OnlineFormNavigationService {
  private activeSections: IActiveSections;
  private activeMenuItem: string;
  @Output() onActiveMenuItem: EventEmitter<string> = new EventEmitter();

  setActiveSections(activeSections: IActiveSections) {
    this.activeSections = activeSections;
  }

  getActiveSections(): IActiveSections {
    return this.activeSections;
  }

  setActiveMenuItem(activeMenuItem: string) {
    this.activeMenuItem = activeMenuItem;
    this.onActiveMenuItem.emit(this.activeMenuItem);
  }

  getActiveMenuItem(): string {
    return this.activeMenuItem;
  }

  getMenuItemNameById(index: number): string {
    if (index > 0 && index < Object.keys(this.activeSections).length) {
      return Object.keys(this.activeSections)[index];
    } else {
      console.log(Object.keys(this.activeSections));
      console.log(index);
      if (Object.keys(this.activeSections).length > 0) {
        return Object.keys(this.activeSections)[0];
      } else {
        return;
      }
    }
  }

  getActiveMenuItemIndex(): number {
    return Object.keys(this.activeSections).findIndex((item) => {
      return item === this.activeMenuItem;
    })
  }

  nextStep() {
    this.setActiveMenuItem(this.getMenuItemNameById(this.getActiveMenuItemIndex() + 1))
  }
}
