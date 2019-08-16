import { Component, OnInit } from '@angular/core';
import { PeriodService } from '../services/period.service';

@Component({
  selector: 'app-period-create',
  templateUrl: './period-create.component.html',
  styleUrls: ['./period-create.component.scss']
})

export class PeriodCreateComponent implements OnInit {

  constructor(public periodService: PeriodService) {
  }

  ngOnInit(): void {
    this.periodService.onOpenCreateNewPeriodPage();
  }
}
