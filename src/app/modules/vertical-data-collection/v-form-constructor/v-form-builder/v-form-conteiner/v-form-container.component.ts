import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../../../data-collection/reducers/field/field.model';
import { range } from 'lodash'
import {NgbDropdownConfig} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-v-form-container',
  templateUrl: './v-form-container.component.html',
  styleUrls: ['./v-form-container.component.scss'],
})
export class VFormContainerComponent implements OnInit{

  @Input() inputField: Field;
  @Input() customFields: Field[];
  @Input() warningTitle: string;

  @Output() onDelete = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();
  @Output() onUniq = new EventEmitter<any>();
  @Output() onIsValidator = new EventEmitter<boolean>();
  @Output() onFieldChanged = new EventEmitter<boolean>();
  warningCheckExistingLabelString='Pay attention that we already have existing field with the same name';
  warningCheckUniqString= 'Pay attention that there are unique Field with the same name or mapped to the same field!';

  showSettings: boolean = false;

  size = range(1  ,13);

  constructor( config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
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

    fieldChanged(event) {
        this.onFieldChanged.emit(event);
    }

  ngOnInit(): void {

  }

}
