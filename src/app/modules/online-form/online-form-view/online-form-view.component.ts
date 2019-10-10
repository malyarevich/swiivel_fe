import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Form } from "@app/models/data-collection/form.model";
import {
  IMenuItems,
  IMainMenuNames,
  menuItems,
  mainMenuNames
} from "../models/menu.model";
import { ICurrentPosition, IFormNavigationState } from '../models/online-form.model';

@Component({
  selector: "sw-online-form-view",
  templateUrl: "./online-form-view.component.html",
  styleUrls: ["./online-form-view.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormViewComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: IFormNavigationState[];
  @Input() currentPosition: ICurrentPosition;
  @Input() formErrors: object;
  @Input() fieldNameList: object;
  @Input() fg: FormGroup;

  @Output() onGoToTab: EventEmitter<any> = new EventEmitter();

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;
  ngOnInit() {}

  getPageTitle(): string {
    return menuItems.find(item => {
      return item.name === this.currentPosition.page;
    })["title"];
  }

  getCurrentPage(): string {
    return this.currentPosition.page;
  }

  getCurrentTab(): number {
    return this.currentPosition.tab;
  }

  getPageTime(): number {
    return menuItems.find(item => {
      return item.name === this.currentPosition.page;
    })["time"];
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
