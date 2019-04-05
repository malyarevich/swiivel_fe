import {Component, Input, OnInit} from '@angular/core';
import {FormPayment} from "./model/form-payment.model";

@Component({
  selector: 'app-v-form-payment',
  templateUrl: './v-form-payment.component.html',
  styleUrls: ['./v-form-payment.component.scss']
})
export class VFormPaymentComponent implements OnInit {

  isBold: boolean = true;
  isItalic: boolean = false;
  @Input() formPaymentSideBar: FormPayment[];
  constructor() { }

  ngOnInit() {
  }

}
