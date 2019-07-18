import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { generalSectionsNames } from "../model/general-info-section-name.model";
import { Form } from "../../model/form.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";
import { Field } from "../../model/field.model";

@Component({
  selector: "app-online-form-general-info",
  templateUrl: "./online-form-general-info.component.html",
  styleUrls: ["./online-form-general-info.component.scss"]
})
export class OnlineFormGeneralInfoComponent implements OnInit {
  // @Input() form: Form;
  @Input() form: Field;
  @Output() onSetPercent: EventEmitter<number> = new EventEmitter();

  percent: number;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  navContent: object = [
    {
      id: "parents",
      title: "Parents information"
    },
    {
      id: "students",
      title: "Students information"
    }
  ];

  activeId: string = "parents";

  readonly generalSectionsNames = generalSectionsNames;

  constructor() {}

  ngOnInit() {
    // TODO: count percent
    this.percent = 65;
    this.onSetPercent.emit(this.percent);
  }

  getTime() {
    return this.menuItems.find(o => o.name === this.mainMenuNames.generalInfo)
      .time;
  }

  onActive(id: string) {
    this.activeId = id;
  }
}
