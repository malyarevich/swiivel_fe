import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Fee } from '../../../../models/fee.model';
import { Payer } from '../../models/payer.model';
import { PaymentMethodsService } from '../../../../services/payment-methods/payment-methods.service';

import { FeeService } from '../../../../services/fee/fee.service';
import { PaymentMethods } from '../../../../models/paymentMethods.model';
import { PayersService } from '../../services/payers.service';

@Component({
  selector: 'app-payer-account',
  templateUrl: 'payer-account.component.html',
  styleUrls: ['./payer-account.component.scss']
})
export class PayerAccountComponent implements OnInit {
  public activeTab = 'general';
  public fees: Fee[];
  public payer: Payer;
  public paymentMethods: PaymentMethods[] = [];

  constructor(
    private route: ActivatedRoute,
    private feeService: FeeService,
    private payersService: PayersService,
    private paymentMethodsService: PaymentMethodsService,
  ) { }

  ngOnInit() {
    this.payersService.getPayer(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.payer = res.data;
      });

    this.paymentMethodsService.getPaymentMethodsForPayerAccount(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.paymentMethods = res.data;
      });

    this.feeService.getPayerFee(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.fees = res.data.fees;
      });
  }

  onTab(tabValue) {
    this.activeTab = tabValue;
  }
}
