import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FormSendService {

  private form_id: string;
  private periodsSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private currentPeriods: BehaviorSubject<any> = new BehaviorSubject<any>([]);


  get $periodsList() {
    return this.periodsSubject.asObservable();
  }

  get $selectedPeriods() {
    return this.currentPeriods.asObservable();
  }

  get selectedPeriods() {
    return this.currentPeriods.getValue();
  }

  set selectedPeriods(periods) {
    this.currentPeriods.next(periods);
  }

  get formId() {
    return this.form_id;
  }

  constructor(
    private api: ApiService
  ) {

  }

  initFormSend(id: string) {
    this.form_id = id;
    this.loadFormSend();
  }

  loadFormSend(): void {
    this.api.getFormSend(this.form_id).subscribe(res => {
      console.log('response', res);
      if (res) {
        if (res.periods) {
          if (res.periods.list) {
            this.currentPeriods.next(res.periods.chosen ? res.periods.chosen : []);
            this.periodsSubject.next(res.periods.list.periods);
          }
        }
      }
    });
  }

  togglePeriods(item: any, e: boolean): void {
    let tmp = this.selectedPeriods;
    if (e === true) {
      tmp.push(item);
    } else if (e === false) {
      tmp.splice(tmp.findIndex(i => (i.id === item.id)), 1);
    }
    this.selectedPeriods = tmp;
  }

  isSelectedPeriod(id): boolean {
    return this.selectedPeriods.findIndex(i => (i.id === id)) >= 0 ? true : false;
  }



}