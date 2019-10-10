import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FinPeriod} from '@models/fin-period.model';

@Component({
  selector: 'app-form-general-period',
  templateUrl: './form-general-period.component.html',
  // styleUrls: ['./form-general-period.component.scss', '../form-general-information.component.css']
})
export class FormGeneralPeriodComponent implements OnInit {
  @Input() generalInfoForm: FormGroup;
  @Input() periods: [FinPeriod];

  constructor() { }

  ngOnInit() {
  }

  isInvalidCheckboxGroup(groupName: string): boolean {
    return (
      this.generalInfoForm.controls[groupName].touched &&
      this.generalInfoForm.controls[groupName].errors &&
      this.generalInfoForm.controls[groupName].errors
        .requireOneCheckboxToBeChecked
    );
  }

  addHiddenClass(isNeedToHide: boolean): string {
    return isNeedToHide ? 'hidden_block' : '';
  }
}
