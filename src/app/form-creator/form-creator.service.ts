import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { TreeDataSource } from './tree.datasource';
import { filter } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Injectable()
export class FormCreatorService {
  private _savedFields;
  private mongoId: string;
  private fieldSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  private sectionSubject$: BehaviorSubject<any> = new BehaviorSubject('intro');
  private sectionsSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  private eventSubject$: Subject<any> = new Subject();
  private sidebarSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  private formTemplateSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  public form: FormGroup;
  constructor(private fb: FormBuilder) {


  }
  set formId(id: string) {
    this.mongoId = id;
  }

  get formId() {
    return this.mongoId;
  }

  set formTemplate(data: any) {
    this.formTemplateSubject$.next(data);
  }

  createForm(data?) {
    this.form = this.fb.group({
      'name': [''],
      'type': [''],
      'packetIntroduction': this.fb.group({
        'content': [''],
        'sectionName': [''],
        'sectionWidth': ['']
      }),
      'formFields': this.fb.group({
        'fields': this.fb.array([]),
      }),
      'documentsForms': this.fb.group({
        'documents': this.fb.group({
          'documentsItems': this.fb.array([]),
          'sectionName': [''],
          'sectionWidth': ['']
        }),
        'formsPDF': this.fb.group({
          'formsPDFItems': this.fb.array([]),
          'sectionName': [''],
          'sectionWidth': ['']
        }),
      }),
      'consentInfo': this.fb.group({
        'constents': this.fb.array([]),
        'sectionName': [''],
        'sectionWidth': ['']
      }),
      'termsConditions': this.fb.group({
        'signature': this.fb.group({
          'isRequire': [''],
          'type': [''],
          'eType': [''],
          'isBothParents': [''],
          'signed': this.fb.group({
            'parents': [''],
            'fathers': [''],
            'mothers': ['']
          })
        }),
        'termsConditionsItems': this.fb.array([]),
        'sectionName': [''],
        'sectionWidth': ['']
      })
    });
    if (data) {
      this.patchForm(data);
    }
    return this.form;
  }

  patchForm(data) {
    this.form.patchValue(data);
    console.log(this.form.value);
    for (let field of data.fields) {
      this.addFormField(field);
    }
  }

  addFormField(data) {
    let fields = this.form.get('formFields.fields') as FormArray;
    fields.push(this.createFormField(data));
  }

  createFormField(data) {
    let field = this.fb.group({

    });
    return field;
  }






  get formTemplate() {
    return this.formTemplateSubject$.getValue()
  }

  get formTemplate$() {
    return this.formTemplateSubject$.asObservable();
  }

  get sidebar() {
    return this.sidebarSubject$.asObservable();
  }

  set sidebar(data: any) {
    this.sidebarSubject$.next(data);
  }

  get fields$() {
    return this.fieldSubject$.asObservable();
  }
  get fields() {
    return this.fieldSubject$.getValue();
  }


  set section(current: any) {
    this.sectionSubject$.next(current);
  }

  get section() {
    return this.sectionSubject$.getValue();
  }

  get section$() {
    return this.sectionSubject$.asObservable();
  }

  set sections(current: any) {
    this.sectionsSubject$.next(current);
  }

  get sections() {
    return this.sectionsSubject$.getValue();
  }

  get sections$() {
    return this.sectionsSubject$.asObservable();
  }







  get events$() {
    return this.eventSubject$;
  }
  set event(eventObj: any) {
    this.eventSubject$.next(eventObj);
  }

}
