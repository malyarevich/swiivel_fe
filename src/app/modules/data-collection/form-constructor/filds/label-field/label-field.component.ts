import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label-field',
  templateUrl: './label-field.component.html',
  styleUrls: ['./label-field.component.scss']
})
export class LabelFieldComponent {
  @Input() data: any;

}
