import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-phone-number-field',
  templateUrl: './phone-number-field.component.html',
  styleUrls: ['./phone-number-field.component.css']
})
export class PhoneNumberFieldComponent  {
  @Input() data: any;



}
