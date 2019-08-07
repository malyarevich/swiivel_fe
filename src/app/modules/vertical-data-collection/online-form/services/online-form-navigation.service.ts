import { Injectable, Type, EventEmitter, Output } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
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
  @Output() onActiveSectionItem: EventEmitter<string> = new EventEmitter();
  @Output() onActiveMenuItem: EventEmitter<string> = new EventEmitter();
  @Output() onSetActiveMenuItems: EventEmitter<
    IActiveSections
  > = new EventEmitter();
  @Output() onChangeSectionListOfMenuItems: EventEmitter<
    Array<object[]>
  > = new EventEmitter();
  @Output() onBothLoaded: EventEmitter<boolean> = new EventEmitter();
  @Output() onSetSectionPercents: EventEmitter<object> = new EventEmitter();
  private activeMainMenuItems: IActiveSections;
  //page like a General Information or Documents&Forms:
  private activeMenuItem: string;
  private activeMenuItemIndex: number;
  //tab (section in form builder):
  private activeSectionItem: string;
  private activeSectionItemIndex: number;
  private sectionListOfMenuItems: Array<object[]> = [];
  private sectionPercents: object = {};

  setActiveMainMenuItems(activeMainMenuItems: IActiveSections) {
    this.activeMainMenuItems = activeMainMenuItems;
    this.onSetActiveMenuItems.emit(this.activeMainMenuItems);
  }

  getActiveMainMenuItems(): IActiveSections {
    return this.activeMainMenuItems;
  }

  setActiveMenuItem(activeMenuItem: string) {
    this.activeMenuItem = activeMenuItem;
    this.activeMenuItemIndex = this.getMenuItemIndexById(activeMenuItem);
    this.onActiveMenuItem.emit(this.activeMenuItem);
  }

  getActiveMenuItem(): string {
    return this.activeMenuItem;
  }

  getMenuItemNameByIndex(index: number): string {
    if (index > 0 && index < Object.keys(this.activeMainMenuItems).length) {
      return Object.keys(this.activeMainMenuItems)[index];
    } else {
      if (Object.keys(this.activeMainMenuItems).length > 0) {
        return Object.keys(this.activeMainMenuItems)[0];
      } else {
        return;
      }
    }
  }

  getActiveMenuItemIndex(): number {
    return this.activeMenuItemIndex;
  }

  getMenuItemIndexById(id: string): number {
    return Object.keys(this.activeMainMenuItems).findIndex(item => {
      return item === id;
    });
  }

  getSectionItemIndexById(menuIndex: number, sectionId: string): number {
    return this.sectionListOfMenuItems[menuIndex].findIndex(item => {
      return item["_id"] === sectionId;
    });
  }

  setSectionItemOfMenuItems(menuId: string, sections: object[]) {
    this.sectionListOfMenuItems[this.getMenuItemIndexById(menuId)] = sections;
    this.onChangeSectionListOfMenuItems.emit(this.sectionListOfMenuItems);
    if (
      this.sectionListOfMenuItems &&
      this.activeMainMenuItems &&
      this.sectionListOfMenuItems.length ===
        Object.keys(this.activeMainMenuItems).length
    ) {
      this.onBothLoaded.emit(true);
    }
  }

  getActiveSectionItem(): string {
    return this.activeSectionItem;
  }

  setActiveSectionItem(activeSectionItem: string) {
    this.activeSectionItem = activeSectionItem;
    this.activeSectionItemIndex = this.getSectionItemIndexById(
      this.activeMenuItemIndex,
      activeSectionItem
    );
    this.onActiveSectionItem.emit(activeSectionItem);
  }

  setFirstMenuItem() {
    try {
      if (this.activeMainMenuItems) {
        this.setActiveMenuItem(this.getMenuItemNameByIndex(0));
      } else {
        throw "Not initialized - OnlineFormNavigationService.activeMainMenuItems";
      }
    } catch (error) {
      console.warn(error.text ? error.text : error);
    }
  }

  getSectionItemIdByIndex(menuIndex: number, sectionIndex: number): string {
    return this.sectionListOfMenuItems[menuIndex][sectionIndex]["_id"];
  }

  nextMenuItem() {
    this.setActiveMenuItem(
      this.getMenuItemNameByIndex(this.activeMenuItemIndex + 1)
    );
  }

  previousMenuItem() {
    this.setActiveMenuItem(
      this.getMenuItemNameByIndex(this.activeMenuItemIndex - 1)
    );
  }

  setFirstSectionItem() {
    try {
      if (this.sectionListOfMenuItems) {
        this.setActiveSectionItem(
          this.getSectionItemIdByIndex(this.activeMenuItemIndex, 0)
        );
      } else {
        throw "Not initialized - OnlineFormNavigationService.sectionListOfMenuItems";
      }
    } catch (error) {
      console.warn(error.text ? error.text : error);
    }
  }

  setLastSectionItem() {
    this.setActiveSectionItem(
      this.getSectionItemIdByIndex(
        this.activeMenuItemIndex,
        this.getLastSectionIndex()
      )
    );
  }

  setAtFirstStep() {
    this.setFirstMenuItem();
    this.setFirstSectionItem();
  }

  nextSectionItem() {
    const NEXT_INDEX = this.activeSectionItemIndex + 1;
    this.setActiveSectionItem(
      this.getSectionItemIdByIndex(this.activeMenuItemIndex, NEXT_INDEX)
    );
  }

  previousSectionItem() {
    this.setActiveSectionItem(
      this.getSectionItemIdByIndex(
        this.activeMenuItemIndex,
        this.activeSectionItemIndex - 1
      )
    );
  }

  getLastMenuIndex(): number {
    return this.sectionListOfMenuItems.length - 1;
  }

  getLastSectionIndex(): number {
    return this.sectionListOfMenuItems[this.activeMenuItemIndex].length - 1;
  }

  nextStep() {
    if (this.activeSectionItemIndex !== this.getLastSectionIndex()) {
      this.nextSectionItem();
    } else {
      if (this.activeMenuItemIndex !== this.getLastMenuIndex()) {
        this.nextMenuItem();
        this.setFirstSectionItem();
      } else {
        this.setAtFirstStep();
      }
    }
  }

  previousStep() {
    if (this.activeSectionItemIndex !== 0) {
      this.previousSectionItem();
    } else {
      if (this.activeMenuItemIndex !== 0) {
        this.previousMenuItem();
        this.setLastSectionItem();
      }
    }
  }

  setSectionPercent(key: string, value: number) {
    this.sectionPercents[key] = value;
    this.onSetSectionPercents.emit(this.sectionPercents);
  }

  getSectionPercent(key: string): number {
    return this.sectionPercents[key] ? this.sectionPercents[key] : -1;
  }

}
