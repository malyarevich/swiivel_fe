import {Component, Input} from '@angular/core';
import {Field} from '../../../model/field.model';


@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.css']
})
export class EmailFieldComponent  {
  @Input() data: Field;

}
