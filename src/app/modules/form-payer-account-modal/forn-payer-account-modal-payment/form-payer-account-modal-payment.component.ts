import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-payer-account-modal-payment',
  templateUrl: './form-payer-account-modal-payment.component.html',
  styleUrls: ['./form-payer-account-modal-payment.component.scss']
})

export class FormPayerAccountModalPaymentComponent implements OnInit {

  @Input() parentForm: FormGroup;

  public paymentMethod = '';
  public payerPaymentMethods = [];

  private isSelectVisible: boolean = false;
  private paymentMethods: string[] = ['ACH', 'Credit Card'];


  constructor() { }

  ngOnInit() {}

  onSelectMethod(method): void {
    this.isSelectVisible = !this.isSelectVisible;
    this.payerPaymentMethods.length === 0 ?
      this.payerPaymentMethods.push({method: method.fieldValue, id: 1}) :
      this.payerPaymentMethods.push({
        method: method.fieldValue,
        id: (this.payerPaymentMethods[this.payerPaymentMethods.length - 1].id + 1)
      });
  }

  onChangeMethodSelect(): void {
    this.isSelectVisible = !this.isSelectVisible;
    if (!this.isSelectVisible) {
      this.paymentMethod = '';
    }
  }

  onDeleteMethod(id: number): void {
    this.payerPaymentMethods.forEach((method) => {
      if (method.id === id) {
        this.payerPaymentMethods.splice(this.payerPaymentMethods.indexOf(method), 1);
      }
    });
  }

}
