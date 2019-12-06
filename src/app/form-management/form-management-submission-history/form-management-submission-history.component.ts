import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateService } from '@app/services/date.service';
import { FormManagementSubmissionHistoryItemModel } from '@models/form-management/form-management-submission-history-item.model';

const enum historyEvents {
  LOGGED_IN = 'logged_in',
  ENTERED_DATA = 'entered_data',
  UPLOADED_DOCUMENT = 'uploaded_document',
  UPLOADED_FORM = 'uploaded_external_form',
  MADE_PAYMENT = 'made_payment',
  SUBMITTED = 'submitted',
  FORM_STATUS_CHANGED  = 'form_status_change'
}

@Component({
  selector: 'sw-form-management-submission-history',
  templateUrl: './form-management-submission-history.component.html',
  styleUrls: ['./form-management-submission-history.component.scss']
})

export class FormManagementSubmissionHistoryComponent {
  public pathFolder = './assets/images/icons/';
  public searchForm: FormGroup;
  public historyEventsIcons = [{
    action: historyEvents.LOGGED_IN,
    icon: 'logged-in.svg',
    class: 'logged-in'
  }, {
    action: historyEvents.ENTERED_DATA,
    icon: 'enter-data.svg',
    class: 'entered-data'
  }, {
    action: historyEvents.UPLOADED_DOCUMENT,
    event: 'uploaded_document',
    icon: 'uploaded-form.svg',
    class: 'uploaded'
  }, {
    action: historyEvents.UPLOADED_FORM,
    event: 'uploaded_external_form',
    icon: 'uploaded-form.svg',
    class: 'uploaded'
  }, {
    action: historyEvents.MADE_PAYMENT,
    icon: 'dollar.svg',
    class: 'made-payment'
  }, {
    action: historyEvents.SUBMITTED,
    icon: 'submitted.svg',
    class: 'submitted'
  }, {
    action: historyEvents.FORM_STATUS_CHANGED,
    icon: 'change-status.svg',
    class: 'form_status_change'
  }];

  @Input() historyList: FormManagementSubmissionHistoryItemModel[];

  constructor(public dateService: DateService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: new FormControl('')
    });
  }
  checkListLength(): boolean {
    return this.historyList && this.historyList.length > 1;
  }

  getIcon(item: FormManagementSubmissionHistoryItemModel): string {
    return this.historyEventsIcons.find((historyItem) => item.action === historyItem.action).icon;
  }

  getClass(item: FormManagementSubmissionHistoryItemModel): string {
    return `${this.historyEventsIcons.find((historyItem) => item.action === historyItem.action).class} + icon`;
  }

}

