import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormService } from '@app/form/form.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormSendService } from '../form-send.service';
import {
  defaultButtonOptions,
  formType,
  hasNoFamily,
  IButtonOption,
  IPerson,
  IRound
} from '../models/send.model';

@Component({
  selector: 'sw-send-preview',
  templateUrl: './send-preview.component.html',
  styleUrls: ['./send-preview.component.scss']
})
export class SendPreviewComponent implements OnInit, OnDestroy {
  public formId$: BehaviorSubject<string> = new BehaviorSubject(null);
  isPreviewByAccount = false;
  selectedAccount: IPerson;
  formType = formType.generic;
  previewType: FormControl = new FormControl(this.formType);
  filter: FormControl = new FormControl('');
  buttonOptions: IButtonOption[] = defaultButtonOptions;
  destroyed$ = new Subject();
  roundsList: IRound[];
  filteredRoundsList: IRound[];


  get formId(): string {
    return this.formId$.getValue() ? this.formId$.getValue() : null;
  }

  set formId(value: string) {
    this.formId$.next(value);
  }
  constructor(
    private formSendService: FormSendService,
    private formService: FormService
  ) {
    this.previewType.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(v => {
        this.formType = v;
      });
    // this.filter.valueChanges.subscribe((filterValue) => {
    //   if (filterValue && filterValue.length > 0) {
    //     // this.dataSource.filter(filterValue.toLowerCase())
    //   } else {
    //     // this.dataSource.filter('');
    //   }
    // });
  }

  ngOnInit() {
    this.formService.formId$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(formId => {
        if (formId) {
          this.formId = formId;
          this.formSendService.initFormSend(formId);
          console.log('this.id', this.formId);

          this.formSendService.$previewRoundList
            .pipe(takeUntil(this.destroyed$))
            .subscribe((roundsList: IRound[]) => {
              this.roundsList = roundsList;
              this.filteredRoundsList = roundsList;
            });
          // this.accountListSubscription = this.formSendService.$accountsList.subscribe((accountList: IGroupAccount[]) => {
          //   this.accountList = accountList;
          //   this.filteredAccountList = accountList;
          // });
          this.filter.valueChanges
            .pipe(takeUntil(this.destroyed$))
            .subscribe(value => {
              this.onChangeFilter(value);
            });
          this.previewType.valueChanges
            .pipe(takeUntil(this.destroyed$))
            .subscribe(value => {
              this.onChangePreviewType(value);
            });
          this.formSendService.$currentAccount
            .pipe(takeUntil(this.destroyed$))
            .subscribe(account => {
              this.selectedAccount = account;
              // console.log('account', account);
            });
        }
      });

    // this.route.parent.params.subscribe((params: Params) => {
    //   console.log('this.id', this.id);
    //   this.id = params.hasOwnProperty('id') ? params.id : '';
    //   console.log('params', params);
    //   // this.initPage();
    // });
  }

  getComparingConditionByDataItem(dataItem: IPerson, value: string) {
    return (
      (dataItem.names &&
        dataItem.names.length > 0 &&
        dataItem.names.find(name => {
          return name.toLowerCase().includes(value.toLowerCase());
        })) ||
      (dataItem.person_family.family_name &&
        dataItem.person_family.family_name
          .toLowerCase()
          .includes(value.toLowerCase()))
    );
  }

  onChangeFilter(value: string) {
    this.filteredRoundsList = this.roundsList.map((round: IRound) => {
      return {
        ...round,
        accounts: round.accounts.filter((account: IPerson) => {
          return this.getComparingConditionByDataItem(account, value);
        })
      };
    });
  }

  onChangePreviewType(value: string) {
    // this.isPreviewByAccount = value === formType.account;
    if (value === formType.account) {
      this.isPreviewByAccount = true;
      this.filter.enable();
    } else {
      this.isPreviewByAccount = false;
      this.filter.disable();
    }
  }

  isSelectedAccount(account: IPerson): boolean {
    return (
      this.isPreviewByAccount &&
      this.selectedAccount &&
      this.selectedAccount.person_family &&
      account &&
      account.person_family &&
      this.selectedAccount.person_family.family_id ===
        account.person_family.family_id
    );
  }

  selectAccount(account: IPerson) {
    if (this.isPreviewByAccount) {
      this.formSendService.selectAccount(account);
    }
  }

  getNames(names: string[]): string {
    let str = '';
    names.forEach((name, index) => {
      if (index === names.length - 1 && names.length > 1) {
        str += ` and ${name}`;
      } else {
        str += `, ${name}`;
      }
    });
    return str;
  }

  getAccountTitle(account: IPerson): string {
    return `${account.person_family.family_name}${this.getNames(
      account.names
    )}`;
  }

  getFamilyId(): string {
    return this.selectedAccount &&
      this.selectedAccount.person_family &&
      this.selectedAccount.person_family.family_id !== hasNoFamily
      ? this.selectedAccount.person_family.family_id
      : null;
  }

  getFormId(): string {
    return this.formId ? this.formId : null;
  }

  onBack(event): void {
    if (event) {
      console.log('onBack', event);
    }
  }

  onSaveNext(event): void {
    if (event) {
      console.log('onSaveNext', event);
    }
  }

  prevStep() {
    this.formSendService.prevStep();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
