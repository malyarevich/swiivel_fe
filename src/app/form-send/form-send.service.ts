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

  get selectedPeriods() {
    return this.currentPeriods.getValue();
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
      // this.loadingSubject.next(false);
    });
  }

  isSelectedPeriod(id): boolean {
    return this.selectedPeriods.findIndex(i => (i.id === id)) >= 0 ? true : false;
  }



}