import { Component, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { COMMON_ERRORS } from '@app/enums';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'sw-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
  @Input() fieldControl: any | NgControl;
  @Input() customErrors: string[];

  public $errorList: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public $isValid: BehaviorSubject<boolean> = new BehaviorSubject(true);

  get errorList(): string[] {
    return this.$errorList.getValue();
  }

  set errorList(value: string[]) {
    this.$errorList.next(value);
  }

  get isValid(): boolean {
    return this.$isValid.getValue();
  }

  set isValid(value: boolean) {
    this.$isValid.next(value);
  }

  constructor() { }

  ngOnInit() {
    this.fieldControl.control.statusChanges.subscribe(s => {
      if (s === 'INVALID') {
        this.isValid = false;
        this.errorList = this.getParsedErrors();
      } else {
        this.isValid = true;
        this.errorList = [];
      }
    });
  }

  getParsedErrors(): string[] {
    const arrErrors: string[] = [];

    if (
      this.fieldControl.control.errors.required
      || this.fieldControl.control.errors.minlength
      || this.fieldControl.control.errors.maxlength
    ) {

      if (this.fieldControl.control.errors.required) {
        arrErrors.push(COMMON_ERRORS.required);
      }

      if (this.fieldControl.control.errors.minlength) {
        arrErrors.push(COMMON_ERRORS.minlength
          .replace('%actualLength%', this.fieldControl.control.errors.minlength.actualLength)
          .replace('%requiredLength%', this.fieldControl.control.errors.minlength.requiredLength)
        );
      }

      if (this.fieldControl.control.errors.maxlength) {
        arrErrors.push(COMMON_ERRORS.maxlength
          .replace('%actualLength%', this.fieldControl.control.errors.maxlength.actualLength)
          .replace('%requiredLength%', this.fieldControl.control.errors.maxlength.requiredLength)
        );
      }
    } else if (this.fieldControl.control.errors) {
      arrErrors.push(COMMON_ERRORS.pattern);
    }
    return arrErrors;
  }

}
