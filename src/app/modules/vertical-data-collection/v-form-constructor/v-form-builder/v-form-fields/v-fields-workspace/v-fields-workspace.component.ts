import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../../model/form.model";
import {Field} from "../../../../model/field.model";

@Component({
  selector: 'app-v-fields-workspace',
  templateUrl: './v-fields-workspace.component.html',
  styleUrls: ['./v-fields-workspace.component.css']
})
export class VFieldsWorkspaceComponent implements OnInit {


  @Input() form: Form;
  @Input() customFields: Field[];

  constructor() { }

  ngOnInit() {
    // console.log(this.form);
  }

}
