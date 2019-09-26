import { Component, Input, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { Form } from '@app/models/data-collection/form';
import { Field } from "@app/models/data-collection/field.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../models/menu.model";
import {
  OnlineFormService,
  hasRequiredField
} from "./../services/online-form.service";

@Component({
  selector: "sw-online-form-general-info",
  templateUrl: "./online-form-general-info.component.html",
  styleUrls: ["./online-form-general-info.component.scss"]
})
export class OnlineFormGeneralInfoComponent implements OnInit, AfterViewInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: object;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  // percent: number;
  sections: any;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  // onValueChangeSubscription: Subscription;

  constructor(
  ) {}

  ngOnInit() {
    this.initSections();
  }

  ngAfterViewInit() {
    // this.onValueChangeSubscription = this.fg.valueChanges.subscribe(
    //   controlList => {
    //     this.calcPercent(controlList);
    //   }
    // );
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
    // this.onlineFormNavigationService.setSectionItemOfMenuItems(
    //   mainMenuNames.generalInfo,
    //   this.sections
    // );
  }

  // calcPercent(list: object) {
  //   let required = 0;
  //   let valid = 0;

  //   for (let item in list) {
  //     if (hasRequiredField(this.fg["controls"][item])) {
  //       required++;
  //       if (this.fg.get(item).valid) {
  //         valid++;
  //       }
  //     }
  //   }
  //   this.setPercent(Math.floor((valid / required) * 100));
  // }

  // setPercent(percent: number) {
  //   this.percent = percent;
  //   this.onlineFormNavigationService.setSectionPercent(
  //     mainMenuNames.generalInfo,
  //     percent
  //   );
  // }

  isShowSectionByIndex(index: number): boolean {
    return index === this.currentPosition['tab'];
  }

  getTime() {
    return this.menuItems.find(o => o.name === this.mainMenuNames.generalInfo)
      .time;
  }

  // ngOnDestroy(): void {
  //   if (this.onValueChangeSubscription) {
  //     this.onValueChangeSubscription.unsubscribe();
  //   }
  // }
}
