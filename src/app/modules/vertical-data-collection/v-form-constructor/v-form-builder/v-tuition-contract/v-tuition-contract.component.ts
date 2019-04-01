import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-v-tuition-contract',
  templateUrl: './v-tuition-contract.component.html',
  styleUrls: ['./v-tuition-contract.component.css']
})
export class VTuitionContractComponent implements OnInit {
  @Input() splitTuitionBy: string;
  @Input() showFee: object;
  @Input() showFeeDiscounts: object;

  constructor() {
  }

  ngOnInit() {
  }

}
