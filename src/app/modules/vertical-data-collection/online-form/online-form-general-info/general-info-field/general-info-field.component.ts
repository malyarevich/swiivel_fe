import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/models/vertical-data-collection/field.model';
import { OnlineFormService } from '../../services/online-form.service';

@Component({
  selector: 'app-general-info-field',
  templateUrl: './general-info-field.component.html',
  styleUrls: ['./general-info-field.component.scss']
})
export class GeneralInfoFieldComponent implements OnInit {
  @Input() field: Field;
  
  fieldComponent: any;
  fieldInputs: object;
  fieldOutputs: object;

  constructor( private onlineFormService: OnlineFormService ) {}

  ngOnInit() {
    this.initFormField();
    this.fieldInputs = {
      data: this.field,
    };
    this.fieldOutputs = {
      onChangeValue: value => this.changeValue(value),
    };
  }

  initFormField() {
    this.fieldComponent = this.onlineFormService.getComponentByTypeNumber(this.field.type);
  }

  changeValue(value: any) {
    console.log(value);
  }

}
