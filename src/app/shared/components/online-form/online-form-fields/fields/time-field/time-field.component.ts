import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../../../../models/vertical-data-collection/field.model';


@Component({
  selector: 'app-time-field',
  templateUrl: './time-field.component.html',
  styleUrls: ['./time-field.component.css']
})
export class TimeFieldComponent implements OnInit {
  @Input() data: Field;

  constructor() { }

  ngOnInit() {
  }

}
