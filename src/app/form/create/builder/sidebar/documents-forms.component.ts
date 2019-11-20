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
      value: false
    },
    {
      label: 'Create New',
      value: true
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
        (this.lform.get('documents.documentsItems') as FormArray).push(this.fb.group({
          id: [''],
          name: [''],
          isUpload: [true],
          isPerFamily: [true],
          accompanyingText: this.fb.group({
            data: [''],
            isBold: [false],
            isItalic: [false]
          }),
          data: '',
          dataTypeAllowed: this.fb.array([])
        }));
        break;
      case 'forms':
          (this.lform.get('formsPDF.formsPDFItems') as FormArray).push(this.fb.group({
            id: [''],
            name: [''],
            isNew: [true],
            isPerFamily: [true],
            isAllowDownloadUpload: [false],
            isFillableOnline: [false],
            accompanyingText: this.fb.group({
              data: [''],
              isBold: [false],
              isItalic: [false]
            }),
            form: this.fb.group({
              name: [null],
              type: [null]
            })
          }))
        break;
    }
    // console.log(this.lform);
  }

  removeItem(from: string, index: number) {
    if (from && from !== '' && index >= 0) {
      switch (from) {
        case 'documents':
            (this.lform.get('documents.documentsItems') as FormArray).removeAt(index);
          break;
        case 'forms':
            (this.lform.get('formsPDF.formsPDFItems') as FormArray).removeAt(index);
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
