import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../vertical-data-collection/model/form.model";

@Component({
  selector: 'app-online-documents',
  templateUrl: './online-documents.component.html',
  styleUrls: ['./online-documents.component.css']
})
export class OnlineDocumentsComponent implements OnInit {
  @Input() form: Form;

  constructor() { }

  ngOnInit() {
  }

}
