import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-general-eligible',
  templateUrl: './form-general-eligible.component.html',
  styleUrls: ['./form-general-eligible.component.scss', '../form-general-information.component.css']
})
export class FormGeneralEligibleComponent implements OnInit {
  @Input() generalInfoForm: FormGroup;

  eligibleAccounts = [
    {label: 'All Families', value: 'allFamilies'},
    {label: 'All Parents', value: 'allParents'},
    {label: 'All Students', value: 'allStudents'},
    {label: 'New Families', value: 'newFamilies'},
    {label: 'New Students', value: 'newStudents'},
    {label: 'Specific Grades', value: 'specificGrades'},
    {label: 'I have more detailed requirements', value: 'moreDetailed'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
