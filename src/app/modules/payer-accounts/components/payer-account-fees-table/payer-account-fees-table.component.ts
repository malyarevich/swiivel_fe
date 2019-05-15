import { Component, Input, OnInit } from '@angular/core';
import {Fee} from '../../../../models/fee.model';

@Component({
  selector: 'app-payer-account-fees-table',
  templateUrl: './payer-account-fees-table.component.html',
  styleUrls: ['./payer-account-fees-table.component.scss']
})
export class PayerAccountFeesTableComponent implements OnInit {
  @Input() fees: Fee[];

  public tableCols = [
    {
      id: 'name',
      type: 'text',
      title: 'FEE TYPE',
      sort: true,
      search: true,
      disabled: false,
      width: '17%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'PERIOD',
      sort: true,
      search: true,
      disabled: false,
      width: '17%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'STUDENTS',
      sort: true,
      search: true,
      disabled: false,
      width: '24%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'PAID',
      sort: true,
      search: true,
      disabled: false,
      width: '14%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'OUSTSTANDING',
      sort: true,
      search: true,
      disabled: false,
      width: '14%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'TOTAL',
      sort: true,
      search: true,
      disabled: false,
      width: '14%',
    },
  ];

  constructor() { }

  ngOnInit() {}

}
