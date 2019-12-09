import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { FormManagementService } from '@app/form-management/form-management.service';
import { DateService } from '@app/services/date.service';
import { FormManagementSubmissionHistoryItemModel } from '@models/form-management/form-management-submission-history-item.model';

@Component({
  selector: 'sw-form-management-submission-subrow',
  templateUrl: './form-management-submission-subrow.component.html',
  styleUrls: ['./form-management-submission-subrow.component.scss']
})

export class FormManagementSubmissionSubrowComponent implements OnInit {
  @Input() formId: string;

  public historyList: FormManagementSubmissionHistoryItemModel[];

  constructor(
    private cdr: ChangeDetectorRef,
    public formManagementService: FormManagementService,
    public dateService: DateService,
  ) {}

  ngOnInit(): void {
    if (this.formId) {
      this.formManagementService.getSubmissionFormDetails(this.formId).subscribe((data) => {
        if (data && data.form_history) {
          this.historyList = data.form_history;
          this.cdr.detectChanges();
        }
      });
    }
  }
}
