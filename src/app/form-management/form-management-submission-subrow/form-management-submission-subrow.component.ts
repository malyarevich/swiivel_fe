import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormManagementService } from '@app/form-management/form-management.service';
import { DateService } from '@app/services/date.service';
import { FormManagementSubmissionHistoryItemModel } from '@models/form-management/form-management-submission-history-item.model';
import { FormManagementSubmissionMissingFieldModel } from '@models/form-management/form-management-submission-missing-field.model';

@Component({
  selector: 'sw-form-management-submission-subrow',
  templateUrl: './form-management-submission-subrow.component.html',
  styleUrls: ['./form-management-submission-subrow.component.scss']
})

export class FormManagementSubmissionSubrowComponent implements OnChanges {
  @Input() formId: string;
  @Input() isOpen: boolean;

  public tabsArray = ['Forms', 'Document'];
  public activeTab = this.tabsArray[0];

  public historyList: FormManagementSubmissionHistoryItemModel[];
  public missingFields: FormManagementSubmissionMissingFieldModel;

  constructor(
    private cdr: ChangeDetectorRef,
    public formManagementService: FormManagementService,
    public dateService: DateService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isOpen && changes.isOpen.currentValue === true) {
      if (this.formId) {
        this.formManagementService.getSubmissionFormDetails(this.formId).subscribe((data) => {
          if (data && data.form_history) {
            this.historyList = data.form_history;
            this.cdr.detectChanges();
          }

          if (data && data.form_data && data.form_data.missingFields) {
            this.missingFields = data.form_data.missingFields;
            this.cdr.detectChanges();
          }
        });
      }
    }
  }
}
