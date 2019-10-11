import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-general-dates',
  templateUrl: './form-general-dates.component.html',
  // styleUrls: ['./form-general-dates.component.scss', '../form-general-information.component.css']
})
export class FormGeneralDatesComponent implements OnInit {
  @Input() generalInfoForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
