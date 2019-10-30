import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FormSendService {

  private form_id: string;
  private periodsSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private currentPeriods: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private accoutSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private accountsList = [
    {
      name: 'New Students',
      key: 'newStudents',
      data: []
    },
    {
      name: 'Specific Grades',
      key: 'specificGrades',
      data: []
    },
    {
      name: 'New Families',
      key: 'newFamilies',
      data: []
    },
    {
      name: 'Current Families',
      key: 'currentFamilies',
      data: []
    },
    {
      name: 'All Parents',
      key: 'allParents',
      data: []
    }
  ];

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

  get $accountsList() {
    return this.accoutSubject.asObservable();
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
    this.loadUsers();
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

  loadUsers() {
    this.accountsList.forEach(async a => {
      await this.api.getUsersByRole(a.key).subscribe(res => {
        if (res) {
          a.data = res;
        }
      });
    });
    this.accoutSubject.next(this.accountsList);
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