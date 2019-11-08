import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DocumentsModel, documentItemDefault } from '@app/models/data-collection/form-constructor/form-builder/documents.model';
import { cloneDeep } from 'lodash';
import { formPDFItemDefault } from '@app/models/data-collection/form-constructor/form-builder/formsPDF.model';

@Component({
  selector: 'sw-documents-forms',
  templateUrl: './documents-forms.component.html',
  styleUrls: ['./documents-forms.component.scss']
})
export class SidebarDocumentsFormsComponent implements OnInit {

  documentBut = [
    {
      label: 'Upload',
      value: true
    },
    {
      label: 'Download',
      value: false
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
  isPerFamilyD: any[] = [];
  radioGroup = ['Needed Per Family', 'Needed Per Student'];
  isOpenDocuments: boolean = false;
  isOpenForms: boolean = false;
  lform: FormGroup;

  @Input()
  set form(_form: any) {
    if (!_form.get('documentsForms')) {
      _form.addControl('documentsForms', this.fb.group({
        documents: this.fb.group({
          sectionName: ['Documents for Parents'],
          sectionWidth: ['full'],
          documentsItems: [[]]
        }),
        formsPDF: this.fb.group({
          sectionName: ['School Forms'],
          sectionWidth: ['full'],
          formsPDFItems: [[]]
        })
      }));
    }
    this.lform = _form.get('documentsForms')
    console.log('additional docs sidebar', this.lform);
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.lform = this.fb.group({
      documents: this.fb.group({
        sectionName: ['Documents for Parents'],
        sectionWidth: ['full'],
        documentsItems: [[]]
      }),
      formsPDF: this.fb.group({
        sectionName: ['School Forms'],
        sectionWidth: ['full'],
        formsPDFItems: [[]]
      })
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
        let documentsList = this.lform.get('documents.documentsItems').value;
        let documentItem: DocumentsModel = cloneDeep(documentItemDefault);
        documentsList.push(documentItem);
        this.lform.get('documents.documentsItems').patchValue(documentsList);
        break;
      case 'forms':
        let formsList = this.lform.get('formsPDF.formsPDFItems').value;
        let formPDFItem = cloneDeep(formPDFItemDefault);
        formsList.push(formPDFItem);
        this.lform.get('formsPDF.formsPDFItems').patchValue(formsList);
        break;
    }
    console.log(this.lform);
  }

  removeItem(from: string, index: number) {
    if (from && from !== '' && index >= 0) {
      switch (from) {
        case 'documents':
            let documentsList = this.lform.get('documents.documentsItems').value;
            documentsList.splice(index, 1);
            this.lform.get('documents.documentsItems').patchValue(documentsList);
          break;
        case 'forms':
            let formsList = this.lform.get('formsPDF.formsPDFItems').value;
            formsList.splice(index, 1);
            this.lform.get('formsPDF.formsPDFItems').patchValue(formsList);
          break;
      }
    }
  }

  changeDocRadio(e, form) {
    if (e === 'Needed Per Family') {
      form.isPerFamily = true;
    } else {
      form.isPerFamily = false;
    }
  }

}
