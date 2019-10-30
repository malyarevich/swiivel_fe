import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormModel } from "@models/data-collection/form.model";
import { Observable, Subscription } from "rxjs";
import { Location } from "@angular/common";
import {
  IMenuItems,
  IMainMenuNames,
  menuItems,
  mainMenuNames
} from "../models/menu.model";

@Component({
  selector: "sw-online-form-view",
  templateUrl: "./online-form-view.component.html",
  styleUrls: ["./online-form-view.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormViewComponent implements OnInit {
  @Input() form: FormModel;
  @Input() formNavigationState: any;
  @Input() currentPosition: object;
  @Input() formErrors: object;
  @Input() fieldNameList: object;
  @Input() fg: FormGroup;

  @Output() onGoToTab: EventEmitter<any> = new EventEmitter();

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;
  ngOnInit() {}

  getPageTitle(): string {
    return menuItems.find(item => {
      return item.name === this.currentPosition["page"];
    })["title"];
  }

  getCurrentPage(): string {
    return this.currentPosition["page"];
  }

  getCurrentTab(): string {
    return this.currentPosition["tab"];
  }

  getPageTime(): number {
    return menuItems.find(item => {
      return item.name === this.currentPosition["page"];
    })["time"];
  }

  isShow(page, tabId): boolean {
    return (
      this.currentPosition["page"] === page &&
      this.currentPosition["tab"] === tabId
    );
  }

  goToTab(tabIndex) {
    this.onGoToTab.emit(tabIndex);
  }
}
