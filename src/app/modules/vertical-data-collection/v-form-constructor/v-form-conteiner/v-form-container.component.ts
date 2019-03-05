import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Field} from '../../../data-collection/reducers/field/field.model';
import { range } from 'lodash'
@Component({
  selector: 'app-v-form-container',
  templateUrl: './v-form-container.component.html',
  styleUrls: ['./v-form-container.component.css'],
})
export class VFormContainerComponent {

  @Input() inputField: Field;
  @Input() customFields: Field[];
  @Input() warningTitle: string;

  @Output() onDelete = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();


  size = range(1  ,13);

  constructor() {

  }



  removeField(id: string){
    this.onDelete.emit(id);
  }



  uniqActivated(event){
    this.inputField.options.unique=!this.inputField.options.unique;
    this.emitChanges(event);
  }


  nameChange(event){
    event=event.trim();

    this.inputField.name=event;
    this.emitChanges(event);
  }



  emitChanges(event){
    this.onChange.emit(event);
  }
}
