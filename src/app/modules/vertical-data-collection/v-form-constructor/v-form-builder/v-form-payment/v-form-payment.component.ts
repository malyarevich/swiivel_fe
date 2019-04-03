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



  // formPaymentSideBar: FormPayment[] = [
  //   {
  //     name: 'TUITION', isActive: false,
  //     type: {
  //       value: 0, name:'fixed'
  //     }
  //   },
  //   {
  //     name: 'BAIS MEDRASH WINTER DORMITORY FEE', isActive: true,
  //     type: {
  //       value: 0, name:'fixed'
  //     }
  //   },
  //   {
  //     name: 'LUNCH FEE', isActive: false,
  //     type: {
  //       value: 0, name:'fixed'
  //     }
  //   },
  //   {
  //     name: 'BUSING/TRANSPORTATION', isActive: false,
  //     type: {
  //       value: 0, name:'fixed'
  //     }
  //   },
  //   {
  //     name: 'REGISTRATION', isActive: true,
  //     type: {
  //       value: 0, name:'fixed'
  //     }
  //   },
  //   {
  //     name: 'SUPPLIES', isActive: true,
  //     type: {
  //       value: 0, name:'fixed'
  //     }
  //   },
  //   {
  //     name: 'ACTIVITY FEE', isActive: false,
  //     type: {
  //       value: 0, name:'fixed'
  //     }
  //   }
  // ];
}
