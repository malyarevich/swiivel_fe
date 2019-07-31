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
  @Output() onSetActiveMenuItems: EventEmitter<IActiveSections> = new EventEmitter();
  @Output() onChangeSectionListOfMenuItems: EventEmitter<Array<object[]>> = new EventEmitter();
  private activeSections: IActiveSections;
  //page like a General Information or Documents&Forms:
  private activeMenuItem: string;
  private activeMenuItemIndex: number;
  //tab (section in form builder):
  private activeSectionItem: string;
  private activeSectionItemIndex: number;
  private sectionListOfMenuItems: Array<object[]> = [];
  private isBothLoaded = new BehaviorSubject<boolean>(false);

  get isStartMenu() {
    return this.isBothLoaded.asObservable();
  }
  
  setActiveSections(activeSections: IActiveSections) {
    this.activeSections = activeSections;
    this.onSetActiveMenuItems.emit(this.activeSections);
  }

  getActiveSections(): IActiveSections {
    return this.activeSections;
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
    if (index > 0 && index < Object.keys(this.activeSections).length) {
      return Object.keys(this.activeSections)[index];
    } else {
      if (Object.keys(this.activeSections).length > 0) {
        return Object.keys(this.activeSections)[0];
      } else {
        return;
      }
    }
  }

  getActiveMenuItemIndex(): number {
    return this.activeMenuItemIndex;
  }

  getMenuItemIndexById(id: string): number {
    return Object.keys(this.activeSections).findIndex(item => {
      return item === id;
    });
  }

  getSectionItemIndexById(menuIndex: number, sectionId: string): number {
    return this.sectionListOfMenuItems[menuIndex].findIndex((item) => {
      return item['_id'] === sectionId;
    });
  }

  setSectionItemOfMenuItems(menuId: string, sections: object[]) {
    this.sectionListOfMenuItems[this.getMenuItemIndexById(menuId)] = sections;
    this.onChangeSectionListOfMenuItems.emit(this.sectionListOfMenuItems);
    if(this.sectionListOfMenuItems && this.activeSections && this.sectionListOfMenuItems.length === Object.keys(this.activeSections).length) {
      this.isBothLoaded.next(true);
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
    this.setActiveMenuItem(
      this.getMenuItemNameByIndex(0)
    );
  }

  getSectionItemIdByIndex(menuIndex: number, sectionIndex: number): string {
    return this.sectionListOfMenuItems[menuIndex][sectionIndex]['_id'];
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
    this.setActiveSectionItem(
      this.getSectionItemIdByIndex(
        this.activeMenuItemIndex, 0)
    );
  }

  setLastSectionItem() {
    this.setActiveSectionItem(
      this.getSectionItemIdByIndex(
        this.activeMenuItemIndex, this.getLastSectionIndex())
    );
  }

  nextSectionItem() {
    const NEXT_INDEX = this.activeSectionItemIndex + 1;
    this.setActiveSectionItem(
      this.getSectionItemIdByIndex(
        this.activeMenuItemIndex,
        NEXT_INDEX
      )
    );
  }

  previousSectionItem() {
    this.setActiveSectionItem(
      this.getSectionItemIdByIndex(
        this.activeMenuItemIndex,
        (this.activeSectionItemIndex - 1)
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
        this.setFirstMenuItem();
        this.setFirstSectionItem();
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
}
