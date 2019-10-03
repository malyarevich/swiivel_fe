import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { TreeDataSource } from './tree.datasource';
import { filter } from 'rxjs/operators';

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

  set formId(id: string) {
    this.mongoId = id;
  }

  get formId() {
    return this.mongoId;
  }

  set formTemplate(data: any) {
    this.formTemplateSubject$.next(data);
  }


  get formTemplate() {
    return this.formTemplateSubject$.getValue()
  }

  get formTemplate$() {
    return this.formTemplateSubject$.pipe(filter(node => node && node.isActive));
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






  constructor() {


  }
  get events$() {
    return this.eventSubject$;
  }
  set event(eventObj: any) {
    this.eventSubject$.next(eventObj);
  }

}
