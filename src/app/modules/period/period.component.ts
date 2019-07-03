import { Component, OnInit } from '@angular/core';
import { Period } from '../../models/period/period.model';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})

export class PeriodComponent implements OnInit {
  public period: Period = {
    name: 'test',
    date_from: new Date(),
    date_to:  new Date()
  };

  constructor() {
  }

  ngOnInit() {
  }

}
