import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from "@angular/core";
import { generalSectionsNames } from "../model/general-info-section-name.model";
import { Form } from 'src/app/models/vertical-data-collection/form.model';
import { Field } from "../../../../models/vertical-data-collection/field.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";
import { Subscription } from 'rxjs';
import { OnlineFormService } from './../services/online-form.service';
import { FormGroup, AbstractControl } from '@angular/forms';

export const hasRequiredField = (abstractControl: AbstractControl): boolean => {
  if (abstractControl.validator) {
      const validator = abstractControl.validator({}as AbstractControl);
      if (validator && validator.required) {
          return true;
      }
  }
  if (abstractControl['controls']) {
      for (const controlName in abstractControl['controls']) {
          if (abstractControl['controls'][controlName]) {
              if (hasRequiredField(abstractControl['controls'][controlName])) {
                  return true;
              }
          }
      }
  }
  return false;
};

@Component({
  selector: "app-online-form-general-info",
  templateUrl: "./online-form-general-info.component.html",
  styleUrls: ["./online-form-general-info.component.scss"]
})
export class OnlineFormGeneralInfoComponent implements OnInit, AfterViewInit {
  // @Input() form: Form;
  @Input() form: Field;
  @Output() onSetPercent: EventEmitter<number> = new EventEmitter();

  percent: number;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  sections: Field[];
  activeId: string;
  fg: FormGroup;
  onValueChangeSubscription: Subscription;

  readonly generalSectionsNames = generalSectionsNames;

  constructor(private onlineFormService: OnlineFormService) {}

  ngOnInit() {
    this.initSections();
    this.activeId = this.sections[0]._id;
    // TODO: init count percent
    this.setPercent(0);
  }

  ngAfterViewInit() {
    this.fg = this.onlineFormService.getFormGroup();
    this.onValueChangeSubscription = this.fg.valueChanges.subscribe((controlList) => {
      this.calcPercent(controlList);
    });
    if(this.fg.valid) {
      this.setPercent(100);
    }
  }

  initSections() {
    if (this.form.fields) {
      this.sections = this.form.fields.filter((item) => {
        return item.type === 114;
      });
    }
  }

  calcPercent(list: object) {
    let required = 0;
    let valid = 0;
    
    for (let item in list) {
      if(hasRequiredField(this.fg['controls'][item])) {
        required++;
        if(this.fg.get(item).valid) {
          valid++;
        }
      }
    }
    this.setPercent(Math.floor(valid/required*100));
  }

  setPercent(percent: number) {
    this.percent = percent;
    this.onSetPercent.emit(this.percent);
  }

  getTime() {
    return this.menuItems.find(o => o.name === this.mainMenuNames.generalInfo)
      .time;
  }

  onActive(id: string) {
    this.activeId = id;
  }

  ngOnDestroy(): void {
    if (this.onValueChangeSubscription) {
      this.onValueChangeSubscription.unsubscribe();
    }
  }

}
