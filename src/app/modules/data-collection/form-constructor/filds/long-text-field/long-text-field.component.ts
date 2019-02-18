import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-long-text-field',
  templateUrl: './long-text-field.component.html',
  styleUrls: ['./long-text-field.component.css']
})
export class LongTextFieldComponent {
  @Input() data: any;
  val: number;
}
