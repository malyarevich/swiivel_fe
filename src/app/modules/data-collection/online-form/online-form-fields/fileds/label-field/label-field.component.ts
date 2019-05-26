import {Component, Input} from '@angular/core';
import {Field} from '../../../model/field.model';


@Component({
  selector: 'app-label-field',
  templateUrl: './label-field.component.html',
  styleUrls: ['./label-field.component.scss']
})
export class LabelFieldComponent {
  @Input() data: Field;

}
