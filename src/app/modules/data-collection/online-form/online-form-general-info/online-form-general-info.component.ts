import { Component, Input, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { Field } from "src/app/models/data-collection/field.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "src/app/models/data-collection/form-constructor/online-form/menu-items";
import {
  OnlineFormService,
  hasRequiredField
} from "./../services/online-form.service";
import { OnlineFormNavigationService } from "./../services/online-form-navigation.service";

@Component({
  selector: "app-online-form-general-info",
  templateUrl: "./online-form-general-info.component.html",
  styleUrls: ["./online-form-general-info.component.scss"]
})
export class OnlineFormGeneralInfoComponent implements OnInit, AfterViewInit {
  // @Input() form: Form;
  @Input() form: Field;

  percent: number;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  activeSectionId: string;
  sections: Field[];
  fg: FormGroup;
  onValueChangeSubscription: Subscription;

  constructor(
    private onlineFormService: OnlineFormService,
    private onlineFormNavigationService: OnlineFormNavigationService
  ) {}

  ngOnInit() {
    this.initSections();
    this.onlineFormNavigationService.onActiveSectionItem.subscribe(
      newActiveSectionId => {
        //TODO: go to behaviorSubjects
        this.activeSectionId = newActiveSectionId;
      }
    );
    // TODO: init count percent from server
  }

  ngAfterViewInit() {
    this.fg = this.onlineFormService.getFormGroup();
    this.onValueChangeSubscription = this.fg.valueChanges.subscribe(
      controlList => {
        this.calcPercent(controlList);
      }
    );
    //FIXME: Crutches
    if (this.fg.valid) {
      this.setPercent(100);
    } else {
      this.setPercent(0);
      this.calcPercent(<object>this.fg.controls);
    }
  }

  initSections() {
    if (this.form.fields && this.form.fields.length > 0) {
      this.sections = this.form.fields.filter(item => {
        return item.type === 114;
      });
    } else {
      this.sections = [
        { _id: "generalInfo", name: "General Information", type: 114 }
      ];
    }
    this.onlineFormNavigationService.setSectionItemOfMenuItems(
      mainMenuNames.generalInfo,
      this.sections
    );
  }

  calcPercent(list: object) {
    let required = 0;
    let valid = 0;

    for (let item in list) {
      if (hasRequiredField(this.fg["controls"][item])) {
        required++;
        if (this.fg.get(item).valid) {
          valid++;
        }
      }
    }
    this.setPercent(Math.floor((valid / required) * 100));
  }

  setPercent(percent: number) {
    this.percent = percent;
    this.onlineFormNavigationService.setSectionPercent(
      mainMenuNames.generalInfo,
      percent
    );
  }

  getTime() {
    return this.menuItems.find(o => o.name === this.mainMenuNames.generalInfo)
      .time;
  }

  ngOnDestroy(): void {
    if (this.onValueChangeSubscription) {
      this.onValueChangeSubscription.unsubscribe();
    }
  }
}
