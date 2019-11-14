import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { SendService } from '../send.service';
import { defaultButtonOptions, formType, IButtonOption, IPerson, IRound, hasNoFamily } from '../models/send.model';

@Component({
  selector: 'sw-send-preview',
  templateUrl: './send-preview.component.html',
  styleUrls: ['./send-preview.component.scss']
})
export class SendPreviewComponent implements OnInit, OnDestroy {
  id: string;
  isPreviewByAccount = false;
  selectedAccount: IPerson;
  formType = formType.generic;
  previewType: FormControl = new FormControl(false);
  filter: FormControl = new FormControl('');
  buttonOptions: IButtonOption[] = defaultButtonOptions;
  roundsListSubscription: Subscription;
  onChangeFilterSubscription: Subscription;
  onChangePreviewTypeSubscription: Subscription;
  onSelectAccountSubscription: Subscription;
  roundsList: IRound[];
  filteredRoundsList: IRound[];

  constructor(
    private formSendService: SendService
  ) {
    // this.filter.valueChanges.subscribe((filterValue) => {
    //   if (filterValue && filterValue.length > 0) {
    //     // this.dataSource.filter(filterValue.toLowerCase())
    //   } else {
    //     // this.dataSource.filter('');
    //   }
    // });
  }

  ngOnInit() {
    this.id = this.formSendService.formId;
    // this.route.parent.params.subscribe((params: Params) => {
    //   console.log('this.id', this.id);
    //   this.id = params.hasOwnProperty('id') ? params.id : '';
    //   console.log('params', params);
    //   // this.initPage();
    // });

    this.roundsListSubscription = this.formSendService.$previewRoundList.subscribe((roundsList: IRound[]) => {
      this.roundsList = roundsList;
      this.filteredRoundsList = roundsList;
    });
    // this.accountListSubscription = this.formSendService.$accountsList.subscribe((accountList: IGroupAccount[]) => {
    //   this.accountList = accountList;
    //   this.filteredAccountList = accountList;
    // });
    this.onChangeFilterSubscription = this.filter.valueChanges.subscribe(value => {
      this.onChangeFilter(value);
    });
    this.onChangePreviewTypeSubscription = this.previewType.valueChanges.subscribe(value => {
      this.onChangePreviewType(value);
    });
    this.onSelectAccountSubscription = this.formSendService.$currentAccount.subscribe(account => {
      this.selectedAccount = account;
      // console.log('account', account);
    });
  }

  getComparingConditionByDataItem(dataItem: IPerson, value: string) {
    return dataItem.names
        && dataItem.names.length > 0
        && dataItem.names.find((name) => {
          return name.toLowerCase().includes(value.toLowerCase());
        })
      || dataItem.person_family.family_name
        && dataItem.person_family.family_name.toLowerCase().includes(value.toLowerCase());
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
    if(value === formType.account) {
      this.isPreviewByAccount = true;
      this.filter.enable();
    } else {
      this.isPreviewByAccount = false;
      this.filter.disable();
    }
  }

  isSelectedAccount(account: IPerson): boolean {
    return this.isPreviewByAccount
      && this.selectedAccount
      && this.selectedAccount.person_family
      && account
      && account.person_family
      && this.selectedAccount.person_family.family_id === account.person_family.family_id;
  }

  selectAccount(account: IPerson) {
    if (this.isPreviewByAccount) {
      this.formSendService.selectAccount(account);
    }
  }

  getNames(names: string[]): string {
    let str = '';
    names.forEach((name, index) => {
      if(index === (names.length - 1) && names.length > 1) {
        str += ` and ${name}`;
      } else {
        str += `, ${name}`;
      }
    })
    return str;
  }

  getAccountTitle(account: IPerson): string {
    return `${account.person_family.family_name}${this.getNames(account.names)}`
  }

  getFamilyId(): string {
    return this.selectedAccount 
      && this.selectedAccount.person_family 
      && this.selectedAccount.person_family.family_id !== hasNoFamily
        ? this.selectedAccount.person_family.family_id
        : null;
  }

  getFormId(): string {
    return this.id ? this.id : '5dc868598ffb0857c9137122';
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
    if (this.roundsListSubscription) {
      this.roundsListSubscription.unsubscribe();
    }
    if (this.onChangeFilterSubscription) {
      this.onChangeFilterSubscription.unsubscribe();
    }
    if (this.onChangePreviewTypeSubscription) {
      this.onChangePreviewTypeSubscription.unsubscribe();
    }
    if (this.onSelectAccountSubscription) {
      this.onSelectAccountSubscription.unsubscribe();
    }
  }
}
