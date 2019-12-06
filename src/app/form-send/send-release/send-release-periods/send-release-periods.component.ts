import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormSendService } from '../../form-send.service';

@Component({
  selector: 'sw-send-release-periods',
  templateUrl: './send-release-periods.component.html',
  styleUrls: ['./send-release-periods.component.scss']
})
export class SendReleasePeriodsComponent implements OnInit {
  @Input() periodsList: any;
  @Input() selectedPeriods: any;
  public periodsFilter: FormControl = new FormControl([]);

  constructor(
    private formSendService: FormSendService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  isSelectedPeriod(id): boolean {
    return this.formSendService.isSelectedPeriod(id);
  }

  getSplits(item: any) {
    let res = '';
    if (item.splits && item.splits.length > 0) {
      item.splits.forEach((s, index) => {
        res += `${s.name}`;
        if (index < item.splits.length - 1) {
          res += ', ';
        }
      });
    }
    return res;
  }

  getPeriodsLength() {
    return `(${this.periodsList.length})`;
  }

  checkboxAction(item, e) {
    this.formSendService.togglePeriods(item, e);
    this.cdr.markForCheck();
  }
}
