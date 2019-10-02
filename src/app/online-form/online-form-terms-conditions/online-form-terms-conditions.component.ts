import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { cloneDeep } from "lodash";
import { Form } from "@app/models/data-collection/form";

@Component({
  selector: "sw-online-form-terms-conditions",
  templateUrl: "./online-form-terms-conditions.component.html",
  styleUrls: ["./online-form-terms-conditions.component.scss"]
})
export class OnlineFormTermsConditionsComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: object;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  termsConditions: any[];

  sections: object[];
  activeSectionId: string;

  constructor() {}

  ngOnInit() {
    this.initTermsConditions();
  }

  initTermsConditions() {
    this.termsConditions = cloneDeep(
      this.form.termsConditions.termsConditionsItems
    ).map(item => {
      return { ...item, _id: item.id, name: item.title };
    });
  }

  isExist(): boolean {
    return (
      typeof this.form.termsConditions !== "undefined" &&
      this.form.termsConditions.termsConditionsItems.length > 0
    );
  }

  isShowTermsConditions(termsConditionsIndex: number): boolean {
    return this.currentPosition["tab"] === termsConditionsIndex;
  }
}
