import { Component, Input, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Form } from '@app/models/data-collection/form';
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../models/menu.model";
import { GenerateErrorsService } from '@app/online-form/utils/generate-errors.service';

@Component({
  selector: "sw-online-form-general-info",
  templateUrl: "./online-form-general-info.component.html",
  styleUrls: ["./online-form-general-info.component.scss"]
})
export class OnlineFormGeneralInfoComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: { page: string, tab: number };
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  sections: any;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  constructor(
    private generateErrorService: GenerateErrorsService
  ) {}

  ngOnInit() {
    this.initSections();
    this.fg.valueChanges.subscribe(() => {
      this.generateErrorService.getFormGroupAndSection(this.sections[this.currentPosition.tab], this.fg);
    })
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
  }

  isExist(): boolean {
    return typeof this.form.fields !== 'undefined' && this.form.fields.length > 0;
  }

  isShowSectionByIndex(index: number): boolean {
    return index === this.currentPosition.tab;
  }

  getTime() {
    return this.menuItems.find(o => o.name === this.mainMenuNames.generalInfo)
      .time;
  }
}
