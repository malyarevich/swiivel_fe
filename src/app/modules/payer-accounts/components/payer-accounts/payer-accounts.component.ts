import { Component, OnInit } from '@angular/core';
import { PayersService } from '../../services/payers.service';
import { Payer } from '../../models/payer.model';

@Component({
  selector: 'app-payer-accounts',
  templateUrl: 'payer-accounts.component.html',
  styleUrls: ['./payer-accounts.component.scss']
})
export class PayerAccountsComponent implements OnInit {
  // showModal = false;
  showModal = true;
  public payers: Payer[] = [];

  constructor(private payersService: PayersService) { }

  ngOnInit() {
    this.payersService.getAllPayers()
      .subscribe((res) => {
        this.payers = res.data.payers;
      });
  }

  onShowModal() {
    this.showModal = true;
  }

  onCloseCreatePayerAccount() {
    this.showModal = false;
  }

}
