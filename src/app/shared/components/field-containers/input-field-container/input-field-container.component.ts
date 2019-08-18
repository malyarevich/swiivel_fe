import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-input-field-container',
  templateUrl: './input-field-container.component.html',
  styleUrls: ['./input-field-container.component.scss']
})
export class InputFieldContainerComponent implements OnInit {
  @Input() isInvalid = false;
  @Input() value: any = '';


  constructor() {
  }

  ngOnInit() {
  }
}
