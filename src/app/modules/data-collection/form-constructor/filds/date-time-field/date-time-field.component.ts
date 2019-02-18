import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-date-time-field',
  templateUrl: './date-time-field.component.html',
  styleUrls: ['./date-time-field.component.css']
})
export class DateTimeFieldComponent  {

  @Input() data: any;
}
