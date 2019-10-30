import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Form } from "@app/models/data-collection/form.model";
import { ICurrentPosition, IFormNavigationState } from '../models/online-form.model';

@Component({
  selector: "sw-online-form-documents-forms",
  templateUrl: "./online-form-documents-forms.component.html",
  styleUrls: ["./online-form-documents-forms.component.scss"]
})
export class OnlineFormDocumentsFormsComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: IFormNavigationState[];
  @Input() currentPosition: ICurrentPosition;
  @Input() formErrors: object;
  @Input() fg: FormGroup;

  sections: object[];

  constructor() {}

  ngOnInit() {}

  isDocumentsTab(): boolean {
    return this.currentPosition.tab === 0;
  }

  isExternalTab(): boolean {
    return this.currentPosition.tab === 1;
  }

  isExist(): boolean {
    return typeof this.form.documentsForms !== 'undefined';
  }

}
