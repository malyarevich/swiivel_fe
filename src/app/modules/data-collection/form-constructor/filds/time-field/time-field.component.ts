import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-time-field',
  templateUrl: './time-field.component.html',
  styleUrls: ['./time-field.component.css']
})
export class TimeFieldComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
