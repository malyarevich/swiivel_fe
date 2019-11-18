import { Injectable } from "@angular/core";
import { ApiService } from "@app/core/api.service";
import { BehaviorSubject, Observable } from "rxjs";
import { DateTime } from "luxon";
import { StepperService } from "@app/shared/stepper.service";
import {
  defaultAccountsList,
  hasNoFamily,
  IPerson,
  IRound
} from "./models/send.model";

@Injectable()
export class FormSendService {
  private form_id: string;
  private periodsSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private currentPeriods: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private accoutSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private currentAccounts: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private currentAccount: BehaviorSubject<IPerson> = new BehaviorSubject<
    IPerson
  >(undefined);
  private roundsSubject: BehaviorSubject<IRound[]> = new BehaviorSubject<
    IRound[]
  >([]);
  private previewRoundsSubject: BehaviorSubject<IRound[]> = new BehaviorSubject<
    IRound[]
  >([]);
  private accountsList: object[] = defaultAccountsList;
  private deletedRoundIdList: number[] = [];

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

  get $currentAccount() {
    return this.currentAccount.asObservable();
  }

  set selectedAccount(account: IPerson) {
    this.currentAccount.next(account);
  }

  get formId() {
    return this.form_id;
  }

  get $roundsList() {
    return this.roundsSubject.asObservable();
  }

  get $previewRoundList(): Observable<IRound[]> {
    return this.previewRoundsSubject.asObservable();
  }

  set previewRoundList(rounds: IRound[]) {
    this.previewRoundsSubject.next(rounds);
  }

  get roundList() {
    return this.roundsSubject.getValue();
  }

  set roundList(rounds: IRound[]) {
    this.roundsSubject.next(rounds);
  }

  constructor(private api: ApiService, private stepperService: StepperService) {
    this.$roundsList.subscribe(rounds => {
      this.previewRoundList = this.getPreviewRoundsListByRounds(rounds);
    });
  }

  getPreviewRoundsListByRounds(rounds: IRound[]): IRound[] {
    const combineAccountsByRoundAccounts = (accounts: IPerson[]): IPerson[] => {
      const combinedAccounts: IPerson[] = [];
      accounts.forEach((person: IPerson) => {
        const combineIndex = combinedAccounts.findIndex(account => {
          return (
            (!person.person_family &&
              account.person_family &&
              account.person_family.family_id === hasNoFamily) ||
            (person.person_family &&
              account.person_family &&
              account.person_family.family_id ===
                person.person_family.family_id)
          );
        });
        if (combineIndex === -1) {
          if (person.person_family) {
            combinedAccounts.push({
              ...person,
              first_name: undefined,
              id: undefined,
              last_name: undefined,
              names: [person.first_name],
              person_family: {
                ...person.person_family,
                adopted: undefined,
                id: undefined,
                id_person: undefined,
                person_role: undefined,
                role_state: undefined
              }
            });
          } else {
            // console.log(hasNoFamily, person);
            combinedAccounts.push({
              ...person,
              first_name: undefined,
              id: undefined,
              last_name: undefined,
              names: [person.first_name],
              person_family: {
                family_name: hasNoFamily,
                family_id: hasNoFamily,
                adopted: undefined,
                id: undefined,
                id_person: undefined,
                person_role: undefined,
                role_state: undefined
              }
            });
          }
        } else {
          combinedAccounts[combineIndex] = {
            ...combinedAccounts[combineIndex],
            names: combinedAccounts[combineIndex].names.concat(
              person.first_name
            )
          };
        }
      });
      return combinedAccounts;
    };

    return rounds.map(round => {
      const newRound: IRound = {
        ...round,
        accounts: combineAccountsByRoundAccounts(round.accounts)
      };
      return newRound;
    });
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
            this.currentPeriods.next(
              res.periods.chosen
                ? res.periods.list.periods.filter(item => {
                    if (
                      Object.keys(res.periods.chosen).filter(key => {
                        if (
                          item.id == key &&
                          res.periods.chosen[key] === true
                        ) {
                          return item;
                        }
                      }).length > 0
                    ) {
                      return true;
                    }
                  })
                : []
            );
            this.periodsSubject.next(res.periods.list.periods);
          }
        }
        if (res.rounds) {
          this.roundsSubject.next(res.rounds);
        }
      }
    });
  }

  loadUsers() {
    this.accountsList.forEach(async (a: any) => {
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
      tmp.splice(
        tmp.findIndex(i => i.id === item.id),
        1
      );
    }
    this.selectedPeriods = tmp;
  }

  isSelectedPeriod(id): boolean {
    return this.selectedPeriods.findIndex(i => i.id === id) >= 0 ? true : false;
  }

  toggleAccounts(item: any, e: boolean): void {
    let tmp = this.selectedAccounts;
    if (
      e === true &&
      !(this.selectedAccounts.findIndex(i => i === item) >= 0)
    ) {
      tmp.push(item);
    } else if (e === false) {
      tmp.splice(
        tmp.findIndex(i => i === item),
        1
      );
    }
    this.selectedAccounts = tmp;
  }

  isSelectedAccounts(item): boolean {
    return this.selectedAccounts.findIndex(i => i === item) >= 0 ? true : false;
  }

  selectAccount(account: IPerson): void {
    this.selectedAccount = account;
  }

  allChildrenSelected(item) {
    const descendants = item.data;
    return descendants.every(child =>
      this.selectedAccounts.findIndex(i => i === child) >= 0 ? true : false
    );
  }

  someChildrenSelected(item) {
    const descendants = item.data;
    const result = descendants.some(child =>
      this.selectedAccounts.findIndex(i => i === child) >= 0 ? true : false
    );
    return result && !this.allChildrenSelected(item);
  }

  saveRound(round: any, isNew: boolean = true, roundId?) {
    if (round.types.email.selected === true) {
      delete round.types.email.selected;
    } else {
      round.types.email = null;
    }
    if (round.types.mailing.selected === true) {
      round.types.mailingis_delay_days =
        round.types.mailing.is_delay_days === true ? 1 : 0;
      delete round.types.mailing.selected;
    } else {
      round.types.mailing = null;
    }
    round.start_date = DateTime.fromString(
      round.start_date,
      "MM/dd/yyyy"
    ).toFormat("yyyy/MM/dd");
    round.end_date = DateTime.fromString(round.end_date, "MM/dd/yyyy").toFormat(
      "yyyy/MM/dd"
    );
    round.accounts = this.selectedAccounts.map(i => i.id);
    round.form_template_mongo_id = this.form_id;
    if (isNew) {
      this.api.createRound(round).subscribe(res => {
        // console.log('res', res);
        // console.log('res[]', this.roundList.push(res));
        if (!!res) {
          const rounds = this.roundList.concat(res);
          this.roundList = rounds;
        }
      });
    } else {
      this.api.update(round, roundId).subscribe(res => {
        if (!!res) {
          const rounds = [...this.roundList];
          rounds[rounds.findIndex(i => i.id === roundId)] = res;
          this.roundList = rounds;
        }
      });
    }
  }

  deleteRound(round: any) {
    // console.log('round', round.id);
    const rounds = this.roundList;
    rounds.splice(
      rounds.findIndex(i => i === round),
      1
    );
    this.roundsSubject.next(rounds);
    this.deletedRoundIdList.push(round.id);
  }

  removeAllRounds() {
    let count = 0;
    let bs = new BehaviorSubject<boolean>(false);
    this.deletedRoundIdList.forEach(roundId => {
      this.api.deleteRound(roundId).subscribe(() => {
        if (++count === this.deletedRoundIdList.length) {
          bs.next(true);
        }
      });
    });
    return bs;
  }

  nextStep() {
    let data: any = { formPeriods: {} };
    this.periodsList.forEach(item => {
      data.formPeriods[item.id] =
        this.selectedPeriods.findIndex(i => i.id === item.id) >= 0
          ? true
          : false;
    });
    // console.log(data);
    this.api.updateFormTemplate(this.formId, data).subscribe(data => {
      this.removeAllRounds().subscribe(() => {
        this.stepperService.stepper = "next";
        // console.log('removeAllRounds', this.roundsSubject.getValue());
      });
    });
  }

  prevStep() {
    this.stepperService.stepper = "prev";
  }
}
