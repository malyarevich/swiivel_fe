import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
  OnChanges
} from "@angular/core";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";
import { IActiveSections } from "src/app/models/vertical-data-collection/v-form-constructor/v-form-builder/active-section.model";
import { OnlineFormNavigationService } from "../services/online-form-navigation.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-online-form-menu",
  templateUrl: "./online-form-menu.component.html",
  styleUrls: ["./online-form-menu.component.scss"]
})
export class OnlineFormMenuComponent implements OnInit, OnChanges, OnDestroy {
  @Input() percents: number[];
  @Input() isStartMenu: boolean;

  activeSections: IActiveSections;
  onSetActiveMenuItemsSubscription: Subscription;
  hoveredItems = [];

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  pathIconsFolder = "assets/images/icons/";

  constructor(
    private onlineFormNavigationService: OnlineFormNavigationService
  ) {}

  ngOnInit() {
    if (this.isStartMenu) {
      this.activeSections = this.onlineFormNavigationService.getActiveMainMenuItems();
      this.onSetActiveMenuItemsSubscription = this.onlineFormNavigationService.onSetActiveMenuItems.subscribe(
        activeSections => {
          this.activeSections = activeSections;
        }
      );
      this.initActiveMenuList();
    }
  }

  ngOnChanges(): void {
    if (this.isStartMenu) {
      this.activeSections = this.onlineFormNavigationService.getActiveMainMenuItems();
      if (!this.onSetActiveMenuItemsSubscription) {
        this.onSetActiveMenuItemsSubscription = this.onlineFormNavigationService.onSetActiveMenuItems.subscribe(
          activeSections => {
            this.activeSections = activeSections;
          }
        );
      }
      this.initActiveMenuList();
    }
  }

  initActiveMenuList() {
    // this.onlineFormNavigationService.setActiveMenuItem(this.onlineFormNavigationService.getMenuItemNameByIndex(0));
    this.onlineFormNavigationService.setFirstMenuItem();
    this.onlineFormNavigationService.setFirstSectionItem();
  }

  getActiveMenuItem(): string {
    return this.onlineFormNavigationService.getActiveMenuItem();
  }

  setActiveMenuItem(menuItemName: string) {
    this.onlineFormNavigationService.setActiveMenuItem(menuItemName);
    this.onlineFormNavigationService.setFirstSectionItem();
  }

  isShowMenuItem(itemMenuName) {
    return this.activeSections[itemMenuName];
  }

  setHovered(itemName) {
    this.hoveredItems[itemName] = true;
  }

  unsetHovered(itemName) {
    this.hoveredItems[itemName] = false;
  }

  isHovered(itemName) {
    return this.hoveredItems[itemName] === true;
  }

  ngOnDestroy(): void {
    if (this.onSetActiveMenuItemsSubscription) {
      this.onSetActiveMenuItemsSubscription.unsubscribe();
    }
  }
}
