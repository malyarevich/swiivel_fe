import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payer-account-fees-table',
  templateUrl: './payer-account-fees-table.component.html',
  styleUrls: ['./payer-account-fees-table.component.scss']
})
export class PayerAccountFeesTableComponent implements OnInit {
  public tableCols = [
    {
      id: 'name',
      type: 'text',
      title: 'FEE TYPE',
      sort: true,
      search: true,
      disabled: false,
    },
    {
      id: 'name',
      type: 'text',
      title: 'PERIOD',
      sort: true,
      search: true,
      disabled: false,
    },
    {
      id: 'name',
      type: 'text',
      title: 'STUDENTS',
      sort: true,
      search: true,
      disabled: false,
    },
    {
      id: 'name',
      type: 'text',
      title: 'PAID',
      sort: true,
      search: true,
      disabled: false,
    },
    {
      id: 'name',
      type: 'text',
      title: 'OUSTSTANDING',
      sort: true,
      search: true,
      disabled: false,
    },
    {
      id: 'name',
      type: 'text',
      title: 'TOTAL',
      sort: true,
      search: true,
      disabled: false,
    },
  ];

  constructor() { }

  ngOnInit() {}

}
