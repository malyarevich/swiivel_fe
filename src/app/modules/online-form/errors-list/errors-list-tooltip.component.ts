import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { ISectionError } from '../utils/generate-errors.service';

@Component({
  selector: 'sw-errors-list-tooltip',
  templateUrl: './errors-list-tooltip.component.html',
  styleUrls: ['./errors-list-tooltip.component.scss']
})
export class ErrorsListTooltipComponent implements OnInit {
  @Input() errorsList: object;
  @Input() fieldNameList: object;
  constructor() { }

  ngOnInit() {
  }

  getErrors() {
    return Object.values(this.errorsList);
  }

  getErrorsKeys() {
    return Object.keys(this.errorsList);
  }

  getErrorsCount() {
    return Object.values(this.errorsList).length;
  }
}
