import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormSendService } from '../form-send.service';

@Component({
  selector: 'sw-send-release',
  templateUrl: './send-release.component.html',
  styleUrls: ['./send-release.component.scss']
})
export class SendReleaseComponent implements OnInit {

  public periodsList: any = [];
  public periodsFilter: FormControl = new FormControl([]);

  constructor(
    private formSendService: FormSendService,
    private cdr: ChangeDetectorRef
  ) {
    this.formSendService.$periodsList.subscribe(val => {
      this.periodsList = val;
      console.log('PERIODS LIST', this.periodsList);
      this.cdr.markForCheck();
    });
  }

  ngOnInit() {
  }

  isSelectedPeriod(id): boolean {
    return this.formSendService.isSelectedPeriod(id);
  }

  getSplits(item: any) {
    let res: string = '';
    if (item.splits && item.splits.length > 0) {
      item.splits.forEach((s, index) => {
        res += `${s.name}`;
        if (index < item.splits.length - 1) { res += ', '; }
      });
    }
    return res;
  }


}
