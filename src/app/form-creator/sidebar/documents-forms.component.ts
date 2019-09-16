import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-documents-forms',
  templateUrl: './documents-forms.component.html',
  styleUrls: ['./documents-forms.component.scss']
})
export class DocumentsFormsComponent implements OnInit {

  documentBut = [
    {
      label: 'Upload',
      value: 'Upload'
    },
    {
      label: 'Download',
      value: 'Download'
    }
  ];
  formBut = [
    {
      label: 'Use Existing',
      value: 'old'
    },
    {
      label: 'Create New',
      value: 'new'
    }
  ];
  radioGroup = ['Needed Per Family', 'Needed Per Student'];


  constructor() { }

  ngOnInit() {
  }

}
