import {Component, Input} from '@angular/core';
import {Field} from '../../../reducers/field/field.model';

@Component({
  selector: 'app-number-text-field',
  templateUrl: './number-text-field.component.html',
  styleUrls: ['./number-text-field.component.css']
})
export class NumberTextFieldComponent  {

  @Input() data: Field;
}
