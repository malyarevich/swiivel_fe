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

  grades = [
    {label: 'Primary', id: 'primary'},
    {label: 'Grade 1', id: 'grade1'},
    {label: 'Grade 2', id: 'grade2'},
    {label: 'Grade 3', id: 'grade3'},
    {label: 'Grade 4', id: 'grade4'},
    {label: 'Grade 5', id: 'grade5'},
    {label: 'Grade 6', id: 'grade6'},
    {label: 'Grade 7', id: 'grade7'},
    {label: 'Grade 8', id: 'grade8'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
