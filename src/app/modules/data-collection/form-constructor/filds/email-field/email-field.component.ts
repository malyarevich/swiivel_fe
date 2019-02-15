import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.css']
})
export class EmailFieldComponent  {
  @Input() data: any;

}
