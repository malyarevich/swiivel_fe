import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Form } from "@app/models/data-collection/form";

@Component({
  selector: "sw-online-form-documents-forms",
  templateUrl: "./online-form-documents-forms.component.html",
  styleUrls: ["./online-form-documents-forms.component.scss"]
})
export class OnlineFormDocumentsFormsComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: object;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  sections: object[];

  constructor() {}

  ngOnInit() {}

  isDocumentsTab(): boolean {
    return this.currentPosition["tab"] === 0;
  }

  isExternalTab(): boolean {
    return this.currentPosition["tab"] === 1;
  }

  isExist(): boolean {
    return typeof this.form.documentsForms !== 'undefined' && this.form.consentInfo.consents.length > 0;
  }

}
