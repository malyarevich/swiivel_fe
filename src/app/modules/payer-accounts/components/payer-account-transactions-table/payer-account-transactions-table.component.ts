import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payer-account-transactions-table',
  templateUrl: './payer-account-transactions-table.component.html',
  styleUrls: ['./payer-account-transactions-table.component.scss']
})
export class PayerAccountTransactionsTableComponent implements OnInit {
  public activeTab = 'groupedSplit';

  public tableCols = [
    {
      id: 'name',
      type: 'text',
      title: 'SPLIT',
      sort: true,
      search: true,
      disabled: false,
      width: '13%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'DUE',
      sort: true,
      search: true,
      disabled: false,
      width: '8%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'FEE TYPE',
      sort: true,
      search: true,
      disabled: false,
      width: '10%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'TRANSACTIONS',
      sort: true,
      search: true,
      disabled: false,
      width: '25%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'AMOUNT',
      sort: true,
      search: true,
      disabled: false,
      width: '8%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'PAID',
      sort: true,
      search: true,
      disabled: false,
      width: '8%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'OWED',
      sort: true,
      search: true,
      disabled: false,
      width: '8%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'OUTSTANDING',
      sort: true,
      search: true,
      disabled: false,
      width: '10%',
    },
    {
      id: 'name',
      type: 'text',
      title: 'STATUS',
      sort: true,
      search: true,
      disabled: false,
      width: '10%',
    },
  ];

  public statusValues = ['retry', 'pay now'];
  public statusValue = this.statusValues[0];

  constructor() { }

  ngOnInit() { }

  onTab(tabValue) {
    this.activeTab = tabValue;
  }

  onChangeStatusValue(value) {
    this.statusValue = value;
  }
}
