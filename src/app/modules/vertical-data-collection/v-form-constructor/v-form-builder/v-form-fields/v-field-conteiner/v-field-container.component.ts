import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../../../model/field.model';
import { range } from 'lodash'
@Component({
  selector: 'app-v-field-container',
  templateUrl: './v-field-container.component.html',
  styleUrls: ['./v-field-container.component.scss'],
})
export class VFieldContainerComponent implements OnInit{

  @Input() inputField: Field;
  @Input() customFields: Field[];
  @Input() warningTitle: string;

  @Output() onDelete = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();
  @Output() onUniq = new EventEmitter<any>();
  warningCheckExistingLabelString='Pay attention that we already have existing field with the same name';
  warningCheckUniqString= 'Pay attention that there are unique Field with the same name or mapped to the same field!';

  showSettings: boolean = false;

  size = range(1  ,13);

  constructor() {
  }



  removeField(id: string){
    this.onDelete.emit(id);
  }



  uniqActivated(event){
    this.inputField.options.unique=!this.inputField.options.unique;
    this.onUniq.emit(event);
  }


  nameChange(event){
    event=event.trim();

    this.inputField.name=event;
    this.onChange.emit(event);
  }

  ngOnInit(): void {
    //console.log(this.inputField.hasOwnProperty('mapped'));
  }

}
