import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../vertical-data-collection/model/form.model";
import {DocumentsModel} from "../../../vertical-data-collection/v-form-constructor/v-form-builder/v-documents-forms/model/documents.model";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-online-documents',
  templateUrl: './online-documents.component.html',
  styleUrls: ['./online-documents.component.scss']
})
export class OnlineDocumentsComponent implements OnInit {
  @Input() form: Form;
  token = '?api_token='+environment.api_token;

  constructor() { }

  ngOnInit() {
  }

  openForPreview(document: DocumentsModel){
    if(!document.data) return;
    window.open(this.form.attachments[document.data].link+this.token  );
  }
}
