import {Component, OnInit, Input} from '@angular/core';
import { MissingFields } from '@models/form-management/missing-field';

@Component({
  selector: 'app-inside-missing-fields',
  templateUrl: './inside-missing-fields.component.html',
  styleUrls: ['./inside-missing-fields.component.css']
})
export class InsideMissingFieldsComponent implements OnInit {

  @Input() missingFields: MissingFields;

  showedFields = [];

  constructor() {
  }

  ngOnInit() {
    
  }

  getSections(item: any) {
    return Object.keys(item.sections);
  }

  getMissingFields(item: any, section: string) {
    console.log(JSON.stringify(item.sections[section].missing_fields));
    return item.sections[section].missing_fields;
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
