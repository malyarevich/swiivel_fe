import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  NgZone
} from "@angular/core";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";
import { IActiveSections } from "src/app/models/vertical-data-collection/v-form-constructor/v-form-builder/active-section.model";
import { OnlineFormNavigationService } from "../services/online-form-navigation.service";
import { Subscription, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-online-form-menu",
  templateUrl: "./online-form-menu.component.html",
  styleUrls: ["./online-form-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormMenuComponent implements OnInit, OnDestroy {
  percents: object = {};
  percentsEmitter$ = new BehaviorSubject<object>(this.percents);

  activeMenuItems: IActiveSections;

  onSetActiveMenuItemsSubscription: Subscription;
  onChangeSectionListOfMenuItemsSubscription: Subscription;
  onSetSectionPercentsSubscription: Subscription;

  hoveredItems = [];

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  pathIconsFolder = "assets/images/icons/";

  constructor(
    private onlineFormNavigationService: OnlineFormNavigationService
  ) {}

  ngOnInit() {
    this.onSetActiveMenuItemsSubscription = this.onlineFormNavigationService.onSetActiveMenuItems.subscribe(
      activeMenuItems => {
        this.activeMenuItems = activeMenuItems;
        this.initActiveMenuList();
      }
    );
    this.onChangeSectionListOfMenuItemsSubscription = this.onlineFormNavigationService.onChangeSectionListOfMenuItems.subscribe(
      sectionListOfMenuItems => {
        this.onlineFormNavigationService.setAtFirstStep();
      }
    );

    this.onSetSectionPercentsSubscription = this.onlineFormNavigationService.onSetSectionPercents.subscribe(
      (percents: object) => {
        this.percents = { ...percents };
        this.percentsEmitter$.next(this.percents);
      }
    );
    this.activeMenuItems = this.onlineFormNavigationService.getActiveMainMenuItems();
    this.initActiveMenuList();
  }

  initActiveMenuList() {
    // this.onlineFormNavigationService.setActiveMenuItem(this.onlineFormNavigationService.getMenuItemNameByIndex(0));
    if (this.activeMenuItems) {
      this.onlineFormNavigationService.setFirstMenuItem();
      this.onlineFormNavigationService.setFirstSectionItem();
    }
  }

  getActiveMenuItem(): string {
    return this.onlineFormNavigationService.getActiveMenuItem();
  }

  setActiveMenuItem(menuItemName: string) {
    this.onlineFormNavigationService.setActiveMenuItem(menuItemName);
    this.onlineFormNavigationService.setFirstSectionItem();
  }

  isShowMenuItem(itemMenuName) {
    return this.activeMenuItems[itemMenuName];
  }

  getPercent(itemName: string): number {
    return this.percents[itemName];
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
    if (this.onChangeSectionListOfMenuItemsSubscription) {
      this.onChangeSectionListOfMenuItemsSubscription.unsubscribe();
    }
    if (this.onSetSectionPercentsSubscription) {
      this.onSetSectionPercentsSubscription.unsubscribe();
    }
  }
}
