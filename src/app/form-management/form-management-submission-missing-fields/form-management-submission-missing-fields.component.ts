import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateService } from '@app/services/date.service';
import { FormManagementSubmissionMissingFieldModel } from '@models/form-management/form-management-submission-missing-field.model';
import { IconsEnum } from '@shared/icons.enum';

@Component({
  selector: 'sw-form-management-submission-missing-fields',
  templateUrl: './form-management-submission-missing-fields.component.html',
  styleUrls: ['./form-management-submission-missing-fields.component.scss']
})

export class FormManagementSubmissionMissingFieldsComponent {
  @Input() missingFields: FormManagementSubmissionMissingFieldModel;
  public sections: any[];
  public icons = IconsEnum;
  public searchForm: FormGroup;

  constructor(public dateService: DateService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: new FormControl('')
    });
  }

  changeSectionVisibility(section: any): void {
    section.isOpen = !section.isOpen;
  }
}
