import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { documentItemDefault, DocumentsModel } from '@app/models/data-collection/form-constructor/form-builder/documents.model';
import { formPDFItemDefault } from '@app/models/data-collection/form-constructor/form-builder/formsPDF.model';
import { cloneDeep } from 'lodash';
import { v4 as uuid } from "uuid";

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
  isPerFamilyF: any[] = [];
  radioGroup = ['Needed Per Family', 'Needed Per Student'];
  isOpenDocuments: boolean = true;
  isOpenForms: boolean = true;
  lform: FormGroup;
  // documents: FormArray;
  // forms: FormArray;

  @Input()
  set form(_form: any) {
    console.log('Document form input', _form);
    if (_form) {
      if (!_form.get('documentsForms')) {
        _form.addControl('documentsForms', this.fb.group({
          documents: this.fb.group({
            sectionName: ['Documents for Parents'],
            sectionWidth: ['full'],
            documentsItems: this.fb.array([])
          }),
          formsPDF: this.fb.group({
            sectionName: ['School Forms'],
            sectionWidth: ['full'],
            formsPDFItems: this.fb.array([])
          })
        }));
      }
      if (!_form.get('documents')) {
        _form.addControl('documents', this.fb.array([]));
      }
      if (!_form.get('forms')) {
        _form.addControl('forms', this.fb.array([]));
      }
      this.lform = _form;
      // this.documents = _form.get('documents');
      // this.forms = _form.get('forms');
      let arrayD = this.lform.get('documents') as FormArray;
      let arrayF = this.lform.get('documents') as FormArray;
      if (arrayD.value && arrayD.value.length) {
        arrayD.value.forEach((element, index) => {
          this.isPerFamilyD[index] = element.isPerFamily ? 'Needed Per Family' : 'Needed Per Student';
        });
      }
      if (arrayF.value && arrayF.value.length) {
        arrayF.value.forEach((element, index) => {
          this.isPerFamilyF[index] = element.isPerFamily ? 'Needed Per Family' : 'Needed Per Student';
        });
      }
    }
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.lform = this.fb.group({
      documents: this.fb.array([
        this.fb.group({
          id: [uuid()],
          name: ['Document name'],
          isUpload: [true],
          isPerFamily: [true],
          accompanyingText: this.fb.group({
            data: [''],
            isBold: [false],
            isItalic: [false]
          }),
          data: '',
          dataTypeAllowed: this.fb.array([])
        })
      ]),
      forms: this.fb.array([
        this.fb.group({
          id: [uuid()],
          name: ['Form name'],
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
        })
      ])
      // documents: this.fb.group({
      //   sectionName: ['Documents for Parents'],
      //   sectionWidth: ['full'],
      //   documentsItems: this.fb.array([])
      // }),
      // formsPDF: this.fb.group({
      //   sectionName: ['School Forms'],
      //   sectionWidth: ['full'],
      //   formsPDFItems: this.fb.array([])
      // })
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
    return this.lform.get('documents') as FormArray;
  }

  get forms(): FormArray {
    return this.lform.get('forms') as FormArray;
  }

  addItem(addTo: string): void {
    switch (addTo) {
      case 'documents':
        let array = this.documents;
        array.push(this.fb.group({
          id: [uuid()],
          name: ['Document name'],
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
        if (array.value && array.value.length) {
          array.value.forEach((element, index) => {
            this.isPerFamilyD[index] = element.isPerFamily ? 'Needed Per Family' : 'Needed Per Student';
          });
        }
        break;
      case 'forms':
        let arrayF = this.forms;
        arrayF.push(this.fb.group({
          id: [uuid()],
          name: ['Form name'],
          isNew: [true],
          isPerFamily: [true],
          isAllowDownloadUpload: [false],
          isFillableOnline: [false],
          isPublicly: [false],
          accompanyingText: this.fb.group({
            data: [''],
            isBold: [false],
            isItalic: [false]
          }),
          form: this.fb.group({
            name: [null],
            type: [null]
          })
        }));
        if (arrayF.value && arrayF.value.length) {
          arrayF.value.forEach((element, index) => {
            this.isPerFamilyF[index] = element.isPerFamily ? 'Needed Per Family' : 'Needed Per Student';
          });
        }
        break;
    }
  }

  removeItem(from: string, index: number) {
    if (from && from !== '' && index >= 0) {
      switch (from) {
        case 'documents':
          (this.documents as FormArray).removeAt(index);
          break;
        case 'forms':
          (this.forms as FormArray).removeAt(index);
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
