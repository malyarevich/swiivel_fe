import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../../data-collection/reducers/field/field.model';
import {VFormService} from '../../v-form.service';
import { range } from 'lodash'
@Component({
  selector: 'app-v-form-conteiner',
  templateUrl: './v-form-conteiner.component.html',
  styleUrls: ['./v-form-conteiner.component.css']
})
export class VFormConteinerComponent implements OnInit {

  @Input() inputField: Field;
  @Input() customFields: Field[];

  @Output() onDelete = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();


  size = range(1  ,13);

  constructor() {

  }

  ngOnInit() {
    this.doExistingFieldsIniq();
  }



  removeField(id: string){
    this.onDelete.emit(id);
  }



  uniqActivated(event){
    this.onChange.emit(event);
  }

  doExistingFieldsIniq(){
    if(this.inputField.mapped!='string'){
      this.inputField.options.unique = true;
    }
  }


}
