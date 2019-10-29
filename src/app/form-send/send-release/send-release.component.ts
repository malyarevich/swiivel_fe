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
  public selectedPeriods: any = [];
  public periodsFilter: FormControl = new FormControl([]);

  constructor(
    private formSendService: FormSendService,
    private cdr: ChangeDetectorRef
  ) {
    this.formSendService.$periodsList.subscribe(val => {
      this.periodsList = val;
      this.cdr.markForCheck();
    });
    this.formSendService.$selectedPeriods.subscribe(val => {
      this.selectedPeriods = val;
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

  getPeriodsLength() {
    return `(${this.periodsList.length})`;
  }


  checkboxAction(item, e) {
    this.formSendService.togglePeriods(item, e);

    
    this.cdr.markForCheck();
  }



}
