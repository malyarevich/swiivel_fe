import {Component, Input} from '@angular/core';
import {Field} from '../../../../../../models/vertical-data-collection/field.model';


@Component({
  selector: 'app-long-text-field',
  templateUrl: './long-text-field.component.html',
  styleUrls: ['./long-text-field.component.css']
})
export class LongTextFieldComponent {
  @Input() data: Field;
  val: number;
}
