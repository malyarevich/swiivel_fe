import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormManagementService} from '@app/form-management/form-management.service';
import {DateService} from '@app/services/date.service';
import {FormManagementSubmissionHistoryItemModel} from '@models/form-management/form-management-submission-history-item.model';

@Component({
  selector: 'sw-form-management-submission-subrow',
  templateUrl: './form-management-submission-subrow.component.html',
  styleUrls: ['./form-management-submission-subrow.component.scss']
})

export class FormManagementSubmissionSubrowComponent implements OnInit {

  public historyList: FormManagementSubmissionHistoryItemModel[];

  constructor(public formManagementService: FormManagementService, private cdr: ChangeDetectorRef, public dateService: DateService) {
  }

  ngOnInit(): void {
    this.formManagementService.getSubmissionFormDetails('5daf170b8ffb082ead37b26b').subscribe((data) => {
      if (data && data.form_history) {
        this.historyList = data.form_history;
        this.cdr.detectChanges();
      }
    });
  }


}
