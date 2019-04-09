import { Component, OnInit, Input } from '@angular/core';
import {DocumentSideBar, DocumentsModel} from "./model/documents.model";

@Component({
  selector: 'app-v-documents-forms',
  templateUrl: './v-documents-forms.component.html',
  styleUrls: ['./v-documents-forms.component.css']
})
export class VDocumentsFormsComponent implements OnInit {

  @Input() isDocumentsForms: DocumentSideBar;
  @Input() documents: DocumentsModel[];
  constructor() { }

  ngOnInit() {
  }

}
