import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/models/data-collection/field.model';

@Component({
  selector: 'app-drop-down-list-field',
  templateUrl: './drop-down-list-field.component.html',
  styleUrls: ['./drop-down-list-field.component.scss']
})
export class DropDownListFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  list: Array<object> = [
    // {
    //   id: 1,
    //   title: 'Test 1'
    // },
    // {
    //   id: 2,
    //   title: 'Test 2'
    // },
    // {
    //   id: 3,
    //   title: 'Test 3'
    // },
    // {
    //   id: 4,
    //   title: 'Test 4'
    // },
    // {
    //   id: 5,
    //   title: 'Test 5'
    // },
    // {
    //   id: 6,
    //   title: 'Test 6'
    // }
  ];

  constructor() {}

  ngOnInit() {}
}
