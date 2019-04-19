import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-v-inside-missing-fields',
  templateUrl: './v-inside-missing-fields.component.html',
  styleUrls: ['./v-inside-missing-fields.component.css']
})
export class VInsideMissingFieldsComponent implements OnInit {

  missingFields = [
    {section: 'Family Section', fields: [{name: 'Cell Phone Number'}, {name: 'Emergency Contact Name'}]},
    {section: 'Grandparents Information', fields: [{name: 'Cell Phone Number'}, {name: 'Emergency Contact Name'}]},
    {section: 'Financial', fields: [{name: 'Cell Phone Number'}, {name: 'Emergency Contact Name'}]},
    {section: 'Additional Forms', fields: [{name: 'Cell Phone Number'}, {name: 'Emergency Contact Name'}]},
    {section: 'Consent', fields: [{name: 'Cell Phone Number'}, {name: 'Emergency Contact Name'}]},
    {section: 'Medical Information', fields: [{name: 'Cell Phone Number'}, {name: 'Emergency Contact Name'}]},
  ];

  showedFields = [];

  get allMissingFields() {
    let count: number = 0;
    if (!this.missingFields.length) return 0;
    this.missingFields.forEach(item => {
      count += item.fields.length;
    });
    return count;
  }

  constructor() {
  }

  ngOnInit() {
  }

  showFields(i) {
    this.showedFields.push(i);
  }

  hideFields(i) {
    let index = this.showedFields.indexOf(i);
    this.showedFields.splice(index, 1);
  }

  isFieldsShowed(i) {
    return this.showedFields.find(item => item == i);
  }

}
