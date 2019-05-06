import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../vertical-data-collection/model/form.model";

@Component({
  selector: 'app-online-form-documents-forms',
  templateUrl: './online-form-documents-forms.component.html',
  styleUrls: ['./online-form-documents-forms.component.css']
})
export class OnlineFormDocumentsFormsComponent implements OnInit {

  @Input() form: Form;
  isDocuments: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
