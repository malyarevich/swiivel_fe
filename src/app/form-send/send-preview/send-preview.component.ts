import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormSendService } from '../form-send.service';
import { defaultButtonOptions, IButtonOption, IGroupAccount, IPerson } from '../models/send.model';

@Component({
  selector: 'sw-send-preview',
  templateUrl: './send-preview.component.html',
  styleUrls: ['./send-preview.component.scss']
})
export class SendPreviewComponent implements OnInit {
  id: string;
  selectedPerson: IPerson;
  formType = 'generic';
  filter: FormControl = new FormControl('');
  buttonOptions: IButtonOption[] = defaultButtonOptions;
  accountListSubscription: Subscription;
  onChangeFilterSubscription: Subscription;
  accountList: IGroupAccount[];
  filteredAccountList: IGroupAccount[];
  onSelectPersonSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private formSendService: FormSendService
  ) {
    this.id = this.formSendService.formId;
    this.filter.valueChanges.subscribe((filterValue) => {
      if (filterValue && filterValue.length > 0) {
        // this.dataSource.filter(filterValue.toLowerCase())
      } else {
        // this.dataSource.filter('');
      }
    });
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params.hasOwnProperty('id') ? params.id : '';
      // this.initPage();
    });

    this.accountListSubscription = this.formSendService.$accountsList.subscribe((accountList: IGroupAccount[]) => {
      this.accountList = accountList;
      this.filteredAccountList = accountList;
    });
    this.onChangeFilterSubscription = this.filter.valueChanges.subscribe(value => { this.onChangeFilter(value); } );
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
    this.filteredAccountList = [];
    this.accountList.forEach((groupList: IGroupAccount) => {
      const filteredGroupList = {
        key: groupList.key,
        name: groupList.name,
        data: groupList.data.filter((person: IPerson) => {
          return this.getComparingCondByDataItem(person, value);
        })
      };
      this.filteredAccountList.push(filteredGroupList);
    });
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

}
