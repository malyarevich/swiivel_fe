import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-form-creator-documents-forms',
  templateUrl: './documents-forms.component.html',
  styleUrls: ['./documents-forms.component.scss']
})
export class WorkareaDocumentsFormsComponent implements OnInit {

  public showSection = {
    documents: true,
    forms: true
  }

  documents = [
    {
      documentName: 'text',
      text: '',
      isBothParentsSignature: true,
      checkBox: {
        isShown: false,
        text: null
      },
      button: {
        isShown: false,
        text: 'Button'
      }
    },
    {
      documentName: '',
      text: '',
      isBothParentsSignature: false,
      checkBox: {
        isShown: true,
        text: 'checkbox text'
      },
      button: {
        isShown: true,
        text: 'Button'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  isOpenSection(sectionName: 'documents' | 'forms'): boolean {
    return this.showSection[sectionName];
  }

  expandToggle(event: boolean, sectionName: 'documents' | 'forms'): void {
    this.showSection[sectionName] = event;
  }

}
