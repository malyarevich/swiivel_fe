import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormSendService } from '../form-send.service';
import { defaultButtonOptions, formType, IButtonOption, IGroupAccount, IPerson, IRound } from '../models/send.model';

@Component({
  selector: 'sw-send-preview',
  templateUrl: './send-preview.component.html',
  styleUrls: ['./send-preview.component.scss']
})
export class SendPreviewComponent implements OnInit, OnDestroy {
  id: string;
  isPreviewByAccount = false;
  selectedPerson: IPerson;
  formType = formType.generic;
  previewType: FormControl = new FormControl(false);
  filter: FormControl = new FormControl('');
  buttonOptions: IButtonOption[] = defaultButtonOptions;
  roundsListSubscription: Subscription;
  onChangeFilterSubscription: Subscription;
  onChangePreviewTypeSubscription: Subscription;
  onSelectPersonSubscription: Subscription;
  roundsList: IRound[];
  filteredRoundsList: IRound[];

  constructor(
    private route: ActivatedRoute,
    private formSendService: FormSendService
  ) {
    this.filter.valueChanges.subscribe((filterValue) => {
      if (filterValue && filterValue.length > 0) {
        // this.dataSource.filter(filterValue.toLowerCase())
      } else {
        // this.dataSource.filter('');
      }
    });
  }

  ngOnInit() {
    this.id = this.formSendService.formId;
    // this.route.parent.params.subscribe((params: Params) => {
    //   console.log('this.id', this.id);
    //   this.id = params.hasOwnProperty('id') ? params.id : '';
    //   console.log('params', params);
    //   // this.initPage();
    // });

    this.roundsListSubscription = this.formSendService.$roundsList.subscribe((roundsList: IRound[]) => {
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
    this.onSelectPersonSubscription = this.formSendService.$currentPerson.subscribe(person => {
      this.selectedPerson = person;
      console.log('person', person);
    });
  }

  getComparingCondByDataItem(dataItem: any, value: string) {
    return dataItem.first_name && dataItem.first_name.includes(value)
        || dataItem.last_name && dataItem.last_name.includes(value);
  }

  onChangeFilter(value: string) {
    this.filteredRoundsList = this.roundsList.map((round: IRound) => {
      return {
        ...round,
        accounts: round.accounts.filter((person: IPerson) => {
          return this.getComparingCondByDataItem(person, value);
        })
      };
    });
  }

  onChangePreviewType(value: string) {
    this.isPreviewByAccount = value === formType.account;
  }

  isSelectedPerson(person: IPerson): boolean {
    return this.selectedPerson && this.selectedPerson.id === person.id;
  }

  selectPerson(person: IPerson) {
    this.formSendService.selectPerson(person);
  }

  getFamilyId(): string {
    return this.selectedPerson && this.selectedPerson.person_family
      ? this.selectedPerson.person_family.family_id
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
    if (this.onSelectPersonSubscription) {
      this.onSelectPersonSubscription.unsubscribe();
    }
  }
}
