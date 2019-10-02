import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { ISectionError } from '@app/online-form/utils/generate-errors.service';

@Component({
  selector: 'sw-errors-list-tooltip',
  templateUrl: './errors-list-tooltip.component.html',
  styleUrls: ['./errors-list-tooltip.component.scss']
})
export class ErrorsListTooltipComponent implements OnInit {
  @Input() errors: ISectionError[];
  constructor() { }

  ngOnInit() {
  }

}
