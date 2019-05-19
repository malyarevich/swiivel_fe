import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-payer-account-modal-fee',
  templateUrl: './form-payer-account-modal-fee.component.html',
  styleUrls: ['./form-payer-account-modal-fee.component.scss']
})
export class FormPayerAccountModalFeeComponent implements OnInit {
  public isOpen = false;

  constructor() { }

  ngOnInit() {}

  onOpenFees() {
    this.isOpen = !this.isOpen;
  }

}
