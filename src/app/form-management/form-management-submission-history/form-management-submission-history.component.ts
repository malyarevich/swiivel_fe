import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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

export class FormManagementSubmissionHistoryComponent implements OnInit, OnChanges {
  @Input() historyList: FormManagementSubmissionHistoryItemModel[];
  @Input() displayedHistoryList: FormManagementSubmissionHistoryItemModel[] = [];

  public pathFolder = './assets/images/icons/';
  public searchForm: FormGroup;
  public historyEventsIcons = {
    [historyEvents.LOGGED_IN]: {
      icon: 'logged-in.svg',
      class: 'logged-in',
    },
    [historyEvents.ENTERED_DATA]: {
      icon: 'enter-data.svg',
      class: 'entered-data',
    },
    [historyEvents.UPLOADED_DOCUMENT]: {
      icon: 'uploaded-form.svg',
      class: 'uploaded',
    },
    [historyEvents.UPLOADED_FORM]: {
      icon: 'uploaded-form.svg',
      class: 'uploaded',
    },
    [historyEvents.MADE_PAYMENT]: {
      icon: 'dollar.svg',
      class: 'made-payment',
    },
    [historyEvents.SUBMITTED]: {
      icon: 'submitted.svg',
      class: 'submitted',
    },
    [historyEvents.FORM_STATUS_CHANGED]: {
      icon: 'change-status.svg',
      class: 'form_status_change',
    },
  };

  constructor(public dateService: DateService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((value) => {
      if (value.search && value.search.length) {
        this.displayedHistoryList = this.historyList.filter((historyItem) => {
          return (historyItem.person.full_name.toLowerCase().includes(value.search.toLowerCase()) ||
            historyItem.description.toLowerCase().includes(value.search.toLowerCase())
          );
        });
      } else {
        this.displayedHistoryList = [ ...this.historyList ];
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.historyList && changes.historyList.currentValue && changes.historyList.currentValue.length) {
      this.displayedHistoryList = [ ...this.historyList ];
    }
  }

  getUserName(person: any): any {
    return {
      name: person && person.full_name ? person.full_name : 'no name',
      role: person && person.role ? person.role : '',
    };
  }
}

