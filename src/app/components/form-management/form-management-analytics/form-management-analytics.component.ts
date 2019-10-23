import { Component,  OnInit , Input} from '@angular/core';
import { 
  Round, Log
} from '@models/form-management/analytics';

@Component({
  selector: 'sw-form-management-analytics',
  templateUrl: './form-management-analytics.component.html',
  styleUrls: ['./form-management-analytics.component.scss'],
})
export class FormManagementAnalyticsComponent implements OnInit {
  @Input() round: Round;
  @Input() created: Log;
  @Input() lastUpdated: Log;

  constructor() {}

  ngOnInit() {}

  getRoundDateRange() {
    if (this.round && this.round.start_date && this.round.end_date) {
      return `(${this.round.start_date} - ${this.round.end_date})`;
    }
    return '';
  }
}
