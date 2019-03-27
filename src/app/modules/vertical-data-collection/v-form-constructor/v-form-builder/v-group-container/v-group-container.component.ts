import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../model/field.model';
import { range } from 'lodash'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
@Component({
  selector: 'app-v-group-container',
  templateUrl: './v-group-container.component.html',
  styleUrls: ['./v-group-container.component.scss']
})
export class VGroupContainerComponent implements OnInit {


  @Input() inputGroup;
  warningCheckExistingLabelString='Pay attention that we already have existing field with the same name';
  warningCheckUniqString= 'Pay attention that there are unique Field with the same name or mapped to the same field!';

  size = range(1  ,13);
  constructor() { }
  showNested: boolean = true;
  ngOnInit() {
    // this.inputGroup.fields = [
    //   {
    //     "type": 101,
    //     "name": "Title",
    //     "options": {
    //       "placeholder": "string",
    //       "language": "string",
    //       "text": "string",
    //       "textPopUp": false,
    //       "required": false,
    //       "readonly": false,
    //       "hideLabel": false,
    //       "unique": true,
    //       "value": "string",
    //       "autoComplete": false,
    //       "size": 3,
    //       "default": "string"
    //     },
    //     "constraints": [
    //
    //     ],
    //     "validators": [
    //
    //     ],
    //     "mapped": "title",
    //     "_id": "eecf57bf-c5e7-4e47-9ea3-6d5fa0dc1175",
    //     "isValid": true,
    //     "isValidName": true
    //   },
    //   {
    //     "type": 101,
    //     "name": "Hebrew First Name",
    //     "options": {
    //       "placeholder": "string",
    //       "language": "string",
    //       "text": "string",
    //       "textPopUp": false,
    //       "required": false,
    //       "readonly": false,
    //       "hideLabel": false,
    //       "unique": true,
    //       "value": "string",
    //       "autoComplete": false,
    //       "size": 3,
    //       "default": "string"
    //     },
    //     "constraints": [
    //
    //     ],
    //     "validators": [
    //
    //     ],
    //     "mapped": "hebrew_first_name",
    //     "_id": "8a941c72-1531-4b69-b4e1-64a3779b5942",
    //     "isValid": true,
    //     "isValidName": true
    //   }
    // ];
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
