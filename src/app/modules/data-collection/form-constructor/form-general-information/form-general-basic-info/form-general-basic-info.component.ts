import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-general-basic-info',
  templateUrl: './form-general-basic-info.component.html',
  styleUrls: ['./form-general-basic-info.component.scss', '../form-general-information.component.css']
})
export class FormGeneralBasicInfoComponent implements OnInit {
  @Input() generalInfoForm: FormGroup;

  languages = [
    {label: 'English', value: 'english'},
    {label: 'Hebrew', value: 'hebrew'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getDayparting() {
    const hrs = new Date().getHours();
    if (hrs >= 6 && hrs < 11) { return 'morning'; }
    if (hrs >= 11 && hrs < 19) { return 'afternoon'; }
    if (hrs >= 19 && hrs <= 23) { return 'evening'; }
    return 'night';
  }

}
