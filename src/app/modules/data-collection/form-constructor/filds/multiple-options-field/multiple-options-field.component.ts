import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../reducers/field/field.model';

@Component({
  selector: 'app-multiple-options-field',
  templateUrl: './multiple-options-field.component.html',
  styleUrls: ['./multiple-options-field.component.css']
})
export class MultipleOptionsFieldComponent  {

  @Input() data: Field;
  list: Array<string> = [ "Options 1", "Options 2", "Options 3","Options 4","Options 5"];
}
