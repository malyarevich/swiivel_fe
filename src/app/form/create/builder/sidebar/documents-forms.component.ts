import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-documents-forms',
  templateUrl: './documents-forms.component.html',
  styleUrls: ['./documents-forms.component.scss']
})
export class SidebarDocumentsFormsComponent implements OnInit {

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
  isOpenDocuments: boolean = false;
  isOpenForms: boolean = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      documents: new FormArray([]),
      forms: new FormArray([])
    });
  }

  ngOnInit() {
  }

  showDocuments() {
    this.isOpenDocuments = true;
  }

  hideDocuments() {
    this.isOpenDocuments = false;
  }

  showForms() {
    this.isOpenForms = true;
  }

  hideForms() {
    this.isOpenForms = false;
  }

  get documents(): FormArray {
    return this.form.get('documents') as FormArray;
  }

  get forms(): FormArray {
    return this.form.get('forms') as FormArray;
  }

  addItem(addTo: string): void {
    switch (addTo) {
      case 'documents':
        if (!this.isOpenDocuments) { this.isOpenDocuments = true; }
        this.documents.push(
          new FormGroup({
            name: new FormControl('', { updateOn: 'blur' }),
            chooseDocumentAction: new FormControl('Upload'),
            requirements: new FormControl(null),
          })
        );
        break;
      case 'forms':
        if (!this.isOpenForms) { this.isOpenForms = true; }
        this.forms.push(
          new FormGroup({
            name: new FormControl('', { updateOn: 'blur' }),
            chooseForm: new FormControl(null),
            requirements: new FormControl(null),
            filledOnline: new FormControl(false),
            allowUpload: new FormControl(false)
          })
        );
        break;
    }
  }

  removeItem(from: string, index: number) {
    if (from && from !== '' && index >= 0) {
      switch (from) {
        case 'documents':
          this.documents.removeAt(index);
          break;
        case 'forms':
          this.forms.removeAt(index);
          break;
      }
    }
  }

}
