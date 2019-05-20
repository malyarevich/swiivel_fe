import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-payer-account-modal-fee',
  templateUrl: './form-payer-account-modal-fee.component.html',
  styleUrls: ['./form-payer-account-modal-fee.component.scss']
})
export class FormPayerAccountModalFeeComponent implements OnInit {
  public isOpen = false;
  @Input() recipient: {id: number, name: string };
  @Input() fees: any[];
  @Output() removeRecipientFees: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  onOpenFees() {
    this.isOpen = !this.isOpen;
  }

  onRemoveRecipientFees() {
    this.removeRecipientFees.emit(this.recipient);
  }

}
