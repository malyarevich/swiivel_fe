import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from "../../../../../model/field.model";

@Component({
  selector: 'app-v-side-bar-field',
  templateUrl: './v-side-bar-field.component.html',
  styleUrls: ['./v-side-bar-field.component.css']
})
export class VSideBarFieldComponent implements OnInit {

  @Input() field: Field;
  @Input() style: boolean;
  @Output() onChangeFieldBeing = new EventEmitter<any>();
  @Output() deleteCustom = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }


  onBeingChange(event){
    this.field.exist=!this.field.exist;
    this.onChangeFieldBeing.emit(this.field);
  }

  deleteCustomField(name: string){
    this.deleteCustom.emit(name);
  }
}

