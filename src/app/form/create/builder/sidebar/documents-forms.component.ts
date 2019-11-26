import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  @Input()
  set form(_form: any) {
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
    this.lform = _form.get('documentsForms')
    let arrayD = this.lform.get('documents.documentsItems') as FormArray;
    let arrayF = this.lform.get('formsPDF.formsPDFItems') as FormArray;
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

  constructor(
    private fb: FormBuilder
  ) {
    this.lform = this.fb.group({
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
        let array = this.lform.get('documents.documentsItems') as FormArray
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
        let arrayF = this.lform.get('formsPDF.formsPDFItems') as FormArray;
        arrayF.push(this.fb.group({
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
