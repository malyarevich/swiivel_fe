import {Component, Input, OnInit} from '@angular/core';
import {Field} from "../../../../../model/field.model";
import { range } from 'lodash'
import {Colors, dividersColor, dividerStyle} from "../divider";
import {Form} from "../../../../../model/form.model";
import {SideBarService} from "../../v-side-bar/side-bar.service";

@Component({
  selector: 'app-v-divider-conteiner',
  templateUrl: './v-divider-conteiner.component.html',
  styleUrls: ['./v-divider-conteiner.component.scss']
})
export class VDividerConteinerComponent implements OnInit {
  @Input() inputDivider: Field;
  @Input() form: Form;

  space = range(1  ,11);
  shapeStrokeValueSelector = range(1  ,11);

  colorsDivider: Colors[] = dividersColor;
  dividerStyle = dividerStyle;
  constructor(private sideBarService: SideBarService) { }

  ngOnInit() {

  }

  removeField(field: Field){
    this.sideBarService.onFieldByIdDelete(field, this.form.fields);
  }

}
