import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-general-eligible',
  templateUrl: './form-general-eligible.component.html',
  // styleUrls: ['./form-general-eligible.component.scss', '../form-general-information.component.css']
})
export class FormGeneralEligibleComponent implements OnInit {
  @Input() generalInfoForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
