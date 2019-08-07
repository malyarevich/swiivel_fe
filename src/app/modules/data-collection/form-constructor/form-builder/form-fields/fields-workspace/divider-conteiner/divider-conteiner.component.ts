import {Component, Input, OnInit} from '@angular/core';
import {Field} from "../../../../../model/field.model";
import { range } from 'lodash'
import {Colors, dividersColor, dividerStyle} from "../divider";
import {Form} from "../../../../../model/form.model";
import {SideBarService} from "../../side-bar/side-bar.service";

@Component({
  selector: 'app-divider-conteiner',
  templateUrl: './divider-conteiner.component.html',
  styleUrls: ['./divider-conteiner.component.scss']
})
export class DividerConteinerComponent implements OnInit {
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
