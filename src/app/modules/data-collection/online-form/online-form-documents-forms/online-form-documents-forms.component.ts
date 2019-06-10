import { Component, Input, OnInit } from "@angular/core";
import { Form } from "../../../vertical-data-collection/model/form.model";

@Component({
  selector: "app-online-form-documents-forms",
  templateUrl: "./online-form-documents-forms.component.html",
  styleUrls: ["./online-form-documents-forms.component.scss"]
})
export class OnlineFormDocumentsFormsComponent implements OnInit {
  @Input() form: Form;
  navContent: object = [
    {
      id: "documents",
      title: "Documents for Parents"
    },
    {
      id: "pdf-forms",
      title: "School Forms"
    }
  ];

  activeId: string = "documents";

  constructor() {}

  ngOnInit() {
    // console.log(this.form);
  }

  logWhatIWant() {
    console.log(this.form.forms[0].form);
  }

  onActive(id: string) {
    this.activeId = id;
  }
}
