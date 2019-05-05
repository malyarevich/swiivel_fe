import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Payer } from '../../models/payer.model';

import { PayersService } from '../../services/payers.service';

@Component({
  selector: 'app-payer-account',
  templateUrl: 'payer-account.component.html',
  styleUrls: ['./payer-account.component.scss']
})
export class PayerAccountComponent implements OnInit {
  public payer: Payer;

  constructor(
    private route: ActivatedRoute,
    private payersService: PayersService,
  ) { }

  ngOnInit() {
    this.payersService.getPayer(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.payer = res.data;
      });
  }
}
