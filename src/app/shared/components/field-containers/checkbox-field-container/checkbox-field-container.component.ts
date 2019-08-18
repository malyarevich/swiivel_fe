import {
  Component,
  OnInit,
  Input,
} from '@angular/core';


@Component({
  selector: 'app-checkbox-field-container',
  templateUrl: './checkbox-field-container.component.html',
  styleUrls: ['./checkbox-field-container.component.scss'],
})
export class CheckboxFieldContainerComponent implements OnInit {
  @Input() isInvalid = false;
  @Input() hasMargin = false;

  constructor() {}

  ngOnInit() {}
}
