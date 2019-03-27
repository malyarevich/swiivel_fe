import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from "../../../../model/field.model";

@Component({
  selector: 'app-v-side-bar-field',
  templateUrl: './v-side-bar-field.component.html',
  styleUrls: ['./v-side-bar-field.component.css']
})
export class VSideBarFieldComponent implements OnInit {

  @Input() existing: Field;
  @Input() style: boolean;
  @Output() onChangeFieldBeing = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }


  onBeingChange(event){
    this.existing.exist=!this.existing.exist;
    this.onChangeFieldBeing.emit(event);
  }
}

