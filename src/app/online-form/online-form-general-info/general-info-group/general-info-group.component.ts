import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/models/data-collection/field.model';

@Component({
  selector: 'sw-general-info-group',
  templateUrl: './general-info-group.component.html',
  styleUrls: ['./general-info-group.component.scss']
})
export class GeneralInfoGroupComponent implements OnInit {
  @Input() group: Field;
  @Input() formErrors: any;
  @Input() fg: FormGroup;
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
    this.groups = this.group.fields.filter(item => item.type === 113);
  }

  initFields() {
    this.fields = this.group.fields.filter(item => item.type && item.type !== 113);
  }

}
