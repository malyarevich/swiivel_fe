import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-select-field-container',
  templateUrl: './select-field-container.component.html',
  styleUrls: ['select-field-container.component.scss'],
})
export class SelectFieldContainerComponent  implements OnInit {
  @Input() hideLabel: false;
  @Input() isInvalid = false;
  @Input() showClearBtn = false;

  constructor() {}

  ngOnInit() {}

}
