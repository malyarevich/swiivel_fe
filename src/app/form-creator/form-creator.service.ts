import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable()
export class FormCreatorService {
  private _savedFields;
  private fieldSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  private sectionSubject$: BehaviorSubject<any> = new BehaviorSubject('intro');
  private sectionsSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  private eventSubject$: Subject<any> = new Subject();

  addField(field: any) {
    const change = {field, added: true};
    console.log(change, field);
    this.fieldSubject$.next(change);
    console.log(this.fieldSubject$.getValue());
  }

  removeField(field: any) {
    const change = {field, added: false};
    console.log(change, field);
    this.fieldSubject$.next(change);
  }

  get fieldChanges(): Observable<any> {
    return this.fieldSubject$.asObservable();
  }

  set fields(fields) {
    this._savedFields = fields;
  }

  get fields() {
    return this._savedFields;
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
