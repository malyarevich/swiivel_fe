import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/api.service';
import { BehaviorSubject } from 'rxjs';
import { DateTime } from 'luxon';
import { StepperService } from '@app/shared/stepper.service';

@Injectable()
export class FormSendService {

  private form_id: string;
  private periodsSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private currentPeriods: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private accoutSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private currentAccounts: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private roundsSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
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

  get periodsList() {
    return this.periodsSubject.getValue();
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

  get $selectedAccounts() {
    return this.currentAccounts.asObservable();
  }

  get selectedAccounts() {
    return this.currentAccounts.getValue();
  }

  set selectedAccounts(accounts) {
    this.currentAccounts.next(accounts);
  }

  get formId() {
    return this.form_id;
  }

  get $roundsList() {
    return this.roundsSubject.asObservable();
  }

  get roundList() {
    return this.roundsSubject.getValue();
  }

  constructor(
    private api: ApiService,
    private stepperService: StepperService
  ) {

  }

  initFormSend(id: string) {
    this.form_id = id;
    this.loadFormSend();
    this.loadUsers();
  }

  loadFormSend(): void {
    this.api.getFormSend(this.form_id).subscribe(res => {
      if (res) {
        if (res.periods) {
          if (res.periods.list) {
            this.currentPeriods.next(res.periods.chosen ?
            res.periods.list.periods.filter(item => {
              if (Object.keys(res.periods.chosen).filter(key => {
                if (item.id == key && res.periods.chosen[key] === true) { return item; }
              }).length > 0) { return true; }
            }) : []
            );
            this.periodsSubject.next(res.periods.list.periods);
          }
        } if (res.rounds) {
          this.roundsSubject.next(res.rounds);
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

  toggleAccounts(item: any, e: boolean): void {
    let tmp = this.selectedAccounts;
    if (e === true && !(this.selectedAccounts.findIndex(i => (i === item)) >= 0)) {
      tmp.push(item);
    } else if (e === false) {
      tmp.splice(tmp.findIndex(i => (i === item)), 1);
    }
    this.selectedAccounts = tmp;
  }

  isSelectedAccounts(item): boolean {
    return this.selectedAccounts.findIndex(i => (i === item)) >= 0 ? true : false;
  }

  allChildrenSelected(item) {
    const descendants = item.data;
    return descendants.every(child => (this.selectedAccounts.findIndex(i => (i === child)) >= 0 ? true : false));
  }

  someChildrenSelected(item) {
    const descendants = item.data;
    const result = descendants.some(child => (this.selectedAccounts.findIndex(i => (i === child)) >= 0 ? true : false));
    return result && !this.allChildrenSelected(item);
  }

  saveRound(round: any, isNew: boolean = true, roundId?) {
    if (round.types.email.selected === true) {
      delete round.types.email.selected;
    } else {
      round.types.email = null;
    }
    if (round.types.mailing.selected === true) {
      round.types.mailingis_delay_days = round.types.mailing.is_delay_days === true ? 1 : 0;
      delete round.types.mailing.selected;
    } else {
      round.types.mailing = null;
    }
    round.start_date = DateTime.fromString(round.start_date, 'MM/dd/yyyy').toFormat('yyyy/MM/dd');
    round.end_date = DateTime.fromString(round.end_date, 'MM/dd/yyyy').toFormat('yyyy/MM/dd');
    round.accounts = this.selectedAccounts.map(i => (i.id));
    round.form_template_mongo_id = this.form_id;
    if (isNew) {
      this.api.createRound(round).subscribe(res => {
        if (res.status === 1) {
          this.roundsSubject.next(this.roundList.push(res.data));
        }
      });
    } else {
      this.api.update(round, roundId).subscribe(res => {
        if (!!res) {
          let list = this.roundList;
          list[list.findIndex(i => (i.id === roundId))] = res;
          this.roundsSubject.next(list);
        }
      });
    }
  }

  deleteRound(item: any) {
    let rounds = this.roundList;
    rounds.splice(rounds.findIndex(i => i === item), 1);
    this.roundsSubject.next(rounds);
  }

  nextStep() {
    let data: any = { formPeriods: {} };
    this.periodsList.forEach(item => {
      data.formPeriods[item.id] = this.selectedPeriods.findIndex(i => (i.id === item.id)) >= 0 ? true : false;
    });
    this.api.updateFormTemplate(this.formId, data).subscribe(data => {
    });
    this.stepperService.stepper = 'next';
  }

  prevStep() {
    this.stepperService.stepper = 'prev';
  }


}