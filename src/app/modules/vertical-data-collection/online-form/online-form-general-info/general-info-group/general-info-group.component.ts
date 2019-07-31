import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/models/vertical-data-collection/field.model';

@Component({
  selector: 'app-general-info-group',
  templateUrl: './general-info-group.component.html',
  styleUrls: ['./general-info-group.component.scss']
})
export class GeneralInfoGroupComponent implements OnInit {
  @Input() group: Field;
  @Input() groupCaption: string; 

  groups: Field[];
  fields: Field[];

  constructor() { }

  ngOnInit() {
    this.groupCaption = this.groupCaption ? `${this.groupCaption}   /   ${this.group.name}` : this.group.name;
    this.initNestedGroups();
    this.initFields();
  }

  initNestedGroups() {
    this.groups = this.group.fields.filter((item) => {
      return item.type === 113;
    })
  }

  initFields() {
    this.fields = this.group.fields.filter((item) => {
      return item.type && item.type !== 113;
    })
  }

}
