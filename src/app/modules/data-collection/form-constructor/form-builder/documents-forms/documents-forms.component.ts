import { Component, OnInit, Input } from '@angular/core';
import {DocumentSideBar, DocumentsModel} from "./model/documents.model";
import {Field} from "../../../model/field.model";
import {FormsPDFModel} from "./model/formsPDF.model";
import {DocumentsFormsModel} from "../../../../../models/data-collection/form-constructor/form-builder/documents-forms.model";

@Component({
  selector: 'app-documents-forms',
  templateUrl: './documents-forms.component.html',
  styleUrls: ['./documents-forms.component.css']
})
export class DocumentsFormsComponent implements OnInit {
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
