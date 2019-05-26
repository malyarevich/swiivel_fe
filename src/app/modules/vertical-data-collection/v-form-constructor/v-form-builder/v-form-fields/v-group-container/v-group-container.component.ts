import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../../model/field.model';
import { range } from 'lodash'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {SideBarService} from "../v-side-bar/side-bar.service";
import {Form} from "../../../../model/form.model";

@Component({
  selector: 'app-v-group-container',
  templateUrl: './v-group-container.component.html',
  styleUrls: ['./v-group-container.component.scss']
})
export class VGroupContainerComponent implements OnInit {
  @Input() form: Form;
  @Input() customFields: Field[];
  @Input() inputGroup: Field;
  @Input() sideBar: Field;

  @Input() idSectionForDragDrop: string[];
  warningCheckExistingLabelString='Pay attention that we already have existing field with the same name';
  warningCheckUniqString= 'Pay attention that there are unique Field with the same name or mapped to the same field!';

  showGroupSettings: boolean = false;

  size = range(1  ,13);
  constructor(private sideBarService: SideBarService) { }
  showNested: boolean = true;
  ngOnInit() {
    console.log(this.idSectionForDragDrop);
    this.idSectionForDragDrop.push(this.inputGroup._id);

  }
  drop(event: CdkDragDrop<Field[]>) {
    console.log(event,this.idSectionForDragDrop);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  removeField(field: Field){
    // console.log(this.sideBar[0].fields);
    this.sideBarService.onFieldUncheck(field, this.sideBar[0].fields);
    this.sideBarService.onFieldDelete(field, this.form.fields)
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
