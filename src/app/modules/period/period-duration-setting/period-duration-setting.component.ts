import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Period } from '../../../models/period/period.model';

@Component({
  selector: 'app-period-duration-setting',
  templateUrl: './period-duration-setting.component.html',
  styleUrls: ['./period-duration-setting.component.scss']
})
export class PeriodDurationSettingComponent implements OnInit {
  @Input() period: Period;
  @Input() width?: string = 'auto';
  @Output() onUpdatePeriod = new EventEmitter();

  ngOnInit() {
  }

  constructor() {
  }

}
