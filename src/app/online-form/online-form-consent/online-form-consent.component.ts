import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { cloneDeep } from "lodash";
import { Form } from "@app/models/data-collection/form";

@Component({
  selector: "sw-online-form-consent",
  templateUrl: "./online-form-consent.component.html",
  styleUrls: ["./online-form-consent.component.scss"]
})
export class OnlineFormConsentComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: object;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  consents: any[];

  sections: object[];
  activeSectionId: string;

  constructor() {}

  ngOnInit() {
    this.initConsents();
  }

  initConsents() {
    this.consents = cloneDeep(this.form.consentInfo.consents).map(item => {
      return { ...item, _id: item.id, name: item.title };
    });
  }

  isShowConsent(consentIndex: number): boolean {
    return this.currentPosition['tab'] === consentIndex;
  }

}
