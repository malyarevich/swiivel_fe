import { Component, OnInit, Input } from '@angular/core';
import {DocumentSideBar, DocumentsModel} from "./model/documents.model";
import {Field} from "../../../model/field.model";
import {FormsPDFModel} from "./model/formsPDF.model";
import {DocumentsFormsModel} from "../../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/documents-forms.model";

@Component({
  selector: 'app-v-documents-forms',
  templateUrl: './v-documents-forms.component.html',
  styleUrls: ['./v-documents-forms.component.css']
})
export class VDocumentsFormsComponent implements OnInit {
  @Input() attachments;
  @Input() isDocumentsForms: DocumentSideBar;
  @Input() formsPDF: FormsPDFModel;
  @Input() formId: string;
  @Input() documents: DocumentsModel[];
  @Input() existingFields: Field[];
  @Input() documentsForms: DocumentsFormsModel;
  constructor() { }

  ngOnInit() {
  }

}
