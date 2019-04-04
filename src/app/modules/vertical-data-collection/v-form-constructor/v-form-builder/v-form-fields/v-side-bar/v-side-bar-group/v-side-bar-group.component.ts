import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from "../../../../../model/field.model";
import {isEmpty, cloneDeep } from 'lodash';
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'app-v-side-bar-group',
  templateUrl: './v-side-bar-group.component.html',
  styleUrls: ['./v-side-bar-group.component.css']
})
export class VSideBarGroupComponent implements OnInit {
  showAddButton = true;
  showNested: boolean = true;
  validNewCustomFieldName: boolean = true;
  @Output() onChangeFieldBeing = new EventEmitter<any>();
  @Output() onChangeGroupBeing = new EventEmitter<any>();
  @Output() onDeleteNested = new EventEmitter<any>();
  @Input() group: Field;
  @Input() customFields: Field[];
  @Input() existingFields: Field[];

  constructor() { }

  ngOnInit() {
  }

  onBeingChange(event){

    event?
      this.group.fields.forEach(field=>field.exist=true)
      :this.group.fields.forEach(field=>{
        this.onDeleteNested.emit(field.name);
        field.exist=false;
      }
      );

    this.group.exist=!this.group.exist;
    this.onChangeFieldBeing.emit(this.group);
  }


  deleteCustomNestedField(event){
    this.onDeleteNested.emit(event);
    this.group.fields = this.group.fields.filter((field) => field.name != event);
  }
  onBeingChangeNested(event, field){
    field.exist=!field.exist;
    event?this.onChangeGroupBeing.emit(field):this.onDeleteNested.emit(field.name);
    this.group.exist =this.group.fields.filter(field => field.exist==true).length>0;
    if(!this.group.exist) this.onChangeFieldBeing.emit(this.group);
  }

  addNewCustomField(name: string, fields: Field[]) {
    if (name.length < 3 || !this.validNewCustomFieldName) {
      this.showAddButton = true;
      return;
    }
    let newField: Field = cloneDeep(this.customFields[0]);
    newField.name = name;
    newField._id = uuid();
    newField.exist = false;

    newField.isValid = true;
    newField.isValidName = true;
    newField.isValidName = this.checkExistingFieldsName(newField.name);
    //this.doExistingFieldsUniq(newField);
    // this.fields.push( newField);
    fields.push(newField);
   // this.fieldsValidator();
    this.showAddButton = true;

  }
  checkExistingFieldsName(name: string): boolean {
    const arr = this.existingFields.filter((field => field.name.toLowerCase() == name.toLowerCase()));
    return isEmpty(arr);
  }
  nameChange(event) {
    this.validNewCustomFieldName = this.checkExistingFieldsName(event.target.value.trim());
  }
}
