import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../../model/field.model';
import { range } from 'lodash'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-v-group-container',
  templateUrl: './v-group-container.component.html',
  styleUrls: ['./v-group-container.component.scss']
})
export class VGroupContainerComponent implements OnInit {

  @Input() customFields: Field[];
  @Input() inputGroup;
  warningCheckExistingLabelString='Pay attention that we already have existing field with the same name';
  warningCheckUniqString= 'Pay attention that there are unique Field with the same name or mapped to the same field!';

  showGroupSettings: boolean = false;

  size = range(1  ,13);
  constructor() { }
  showNested: boolean = true;
  ngOnInit() {

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





  onShowGroupSettings() {
    this.showGroupSettings = !this.showGroupSettings;
    this.showNested = false;
  }

  onShowNested() {
    this.showNested = !this.showNested;
    this.showGroupSettings=false;
  }

}
