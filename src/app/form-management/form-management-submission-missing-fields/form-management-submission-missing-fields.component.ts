import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateService } from '@app/services/date.service';
import { FormManagementSubmissionMissingFieldModel } from '@models/form-management/form-management-submission-missing-field.model';
import { IconsEnum } from '@shared/icons.enum';

@Component({
  selector: 'sw-form-management-submission-missing-fields',
  templateUrl: './form-management-submission-missing-fields.component.html',
  styleUrls: ['./form-management-submission-missing-fields.component.scss']
})

export class FormManagementSubmissionMissingFieldsComponent implements OnInit, OnChanges {
  @Input() missingFields: FormManagementSubmissionMissingFieldModel;
  public sections: any[];
  public displayedMissingFields: FormManagementSubmissionMissingFieldModel = {
    completion_percentage: null,
    count_missing_fields: null,
    count_required_fields: null,
    sections: [],
    name: null
  };
  public icons = IconsEnum;
  public searchForm: FormGroup;

  constructor(public dateService: DateService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((value => {
      if (value.search && value.search.length) {
        const displayedMissingFieldsTemp = JSON.parse(JSON.stringify(this.missingFields));

        this.missingFields.sections.forEach((section, sectionIndex) => {
          Object.keys(section.groups).forEach((group) => {
            section.groups[group].missing_fields.forEach((missingField, missingFieldIndex) => {
              if (!missingField.toLowerCase().includes(value.search.toLowerCase())) {
                delete displayedMissingFieldsTemp.sections[sectionIndex].groups[group].missing_fields[missingFieldIndex];
              }
            });

            if (!group.toLowerCase().includes(value.search.toLowerCase()) &&
              !displayedMissingFieldsTemp.sections[sectionIndex].groups[group].missing_fields.filter(item => item).length) {
              delete displayedMissingFieldsTemp.sections[sectionIndex].groups[group];
            }
          });

          if (!Object.entries(displayedMissingFieldsTemp.sections[sectionIndex].groups).length) {
            delete displayedMissingFieldsTemp.sections[sectionIndex];
          }
        });

        displayedMissingFieldsTemp.sections = displayedMissingFieldsTemp.sections.filter(item => item);

        this.displayedMissingFields = displayedMissingFieldsTemp;
      } else {
        this.displayedMissingFields = { ...this.missingFields };
      }
    }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes &&
      changes.missingFields && changes.missingFields.currentValue &&
      changes.missingFields.currentValue.sections && changes.missingFields.currentValue.sections.length) {
      this.displayedMissingFields = { ...this.missingFields };
    }
  }

  changeSectionVisibility(section: any): void {
    section.isOpen = !section.isOpen;
  }
}
