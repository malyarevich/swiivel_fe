import {Component, Input, OnInit} from '@angular/core';
import {DocumentsModel} from "../model/documents.model";

@Component({
  selector: 'app-v-documents-container',
  templateUrl: './v-documents-container.component.html',
  styleUrls: ['./v-documents-container.component.scss']
})
export class VDocumentsContainerComponent implements OnInit {

  @Input() documents: DocumentsModel[];
  sectionName: string = "Documents for Parents";
  width: string = "4 Columns";
  constructor() { }

  ngOnInit() {
  }

}
