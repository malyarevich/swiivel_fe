import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fee } from '../../../models/fee.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-payer-account-modal-fee',
  templateUrl: './form-payer-account-modal-fee.component.html',
  styleUrls: ['./form-payer-account-modal-fee.component.scss']
})

export class FormPayerAccountModalFeeComponent implements OnInit {
  public isOpen = false;
  @Input() recipient: { id: number, name: string };
  @Input() fees: Fee[];
  @Input() parentForm: FormGroup;
  @Output() removeRecipientFees: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateFee: EventEmitter<any> = new EventEmitter<any>();

  public selectedFees: Fee[] = [];
  public selectedFeesId: number[] = [];
  private onlyFees: Fee[] = [];

  constructor() {}

  ngOnInit() {
    this.onlyFees = this.getFees();
  }

  onOpenFees() {
    this.isOpen = !this.isOpen;
  }

  onRemoveRecipientFees() {
    this.removeRecipientFees.emit(this.recipient);
  }

  onSelect(selectedFees: Fee[]): void {
    const selectedFeeId = [];

    selectedFees.forEach((selectedFee) => {
      selectedFeeId.push(selectedFee.id);
    });
    this.fees.forEach((fee) => {
      selectedFeeId.includes(fee.id) ? fee.isActive = true : fee.isActive = false;
    });

    this.selectedFees = selectedFees;
    this.selectedFeesId = selectedFeeId;
  }

  getSelectedFees(): Fee[] {

    const activeFees: Fee[] = [];
    const selectedFeeId = [];

    this.selectedFees.forEach((selectedFee) => {
      selectedFeeId.push(selectedFee.id);
    });

    this.fees.forEach((fee) => {
      selectedFeeId.includes(fee.id) ? fee.isActive = true : fee.isActive = false;
    });

    this.fees.forEach((fee) => {
      if (selectedFeeId.includes(fee.id)) {
        activeFees.push(fee);
      }
    });

    return activeFees;
  }

  getFees(): Fee[] {
    const feeOnly = [];

    this.fees.forEach((fee) => {
      if (fee.type === 'fee') {
        feeOnly.push(fee);
      }
    });

    return feeOnly;
  }

  onRemoveFee(removedFee: Fee): void {
    const selectedFees = [];
    const selectedFeesId = [];

    this.selectedFees.forEach((fee) => {
        if (fee.id !== removedFee.id) {
          selectedFees.push(fee);
          selectedFeesId.push(fee.id);
        }
      }
    );

    this.selectedFees = selectedFees;
    this.selectedFeesId = selectedFeesId;
  }

  onUpdateFee(fees): void {
    console.log(fees);
    this.updateFee.emit(fees);
  }

  // onSort(event): void {
  //
  //   // console.log(this.fees);
  // }

}
