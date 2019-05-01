import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Payer } from '../../models/payer.model';

import { PayersService } from '../../services/payers.service';

@Component({
  selector: 'app-payer',
  templateUrl: 'payer.component.html',
  styleUrls: ['./payer.component.scss']
})
export class PayerComponent implements OnInit {
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
    console.log();
  }
}
