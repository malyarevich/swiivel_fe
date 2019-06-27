import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fee } from '../../../models/fee.model';
import { FeeSplits } from '../../../models/feeSplits.model';

@Component({
  selector: 'app-form-payer-account-modal-responsible-fees',
  templateUrl: './form-payer-account-modal-responsible-fees.component.html',
  styleUrls: ['./form-payer-account-modal-responsible-fees.component.scss']
})

export class FormPayerAccountModalResponsibleFeesComponent implements OnInit {
  @Input() fees: Fee[];
  @Output() onRemoveFee = new EventEmitter();
  @Output() onUpdateFees = new EventEmitter();

  public selectFees: number[] = [];

  public feeTableColumns = [
    {},
    {
      id: 'name',
      title: 'FEE TYPE',
      sort: true,
    },
    {
      id: 'amount',
      position: 'right',
      title: 'TOTAL AMOUNT',
      sort: true,
    },
    {
      id: 'payment',
      title: 'PAYMENT PART',
      longLeftPadding: true,
      sort: false,
    },
    {
      id: 'responsibility',
      position: 'right',
      title: 'TOTAL RESPONSIBILITY',
      sort: true,
    },
    {
      width: '50px',
    },
    {
      width: '50px',
    },
  ];

  public splitsTableColumns = [
    {},
    {
      id: 'name',
      title: 'SPLIT NAME',
      sort: true,
    },
    {
      id: 'amount',
      position: 'right',
      title: 'SPLIT AMOUNT',
      longRightPadding: true,
      sort: true,
    },
    {
      id: 'payment',
      title: 'AMOUNT TO PAY',
      sort: true,
    },
  ];

  private types = {
    split: 'split',
    fee: 'fee',
    splits: 'splits'
  };

  constructor() { }

  ngOnInit() {}


  onOpenRow(id) {
    this.fees.forEach((fee) => {
      if (fee.id === id) {
        fee.open = !fee.open;
      }
    });
  }

  onRemoveClick(fee: Fee): void {
    this.onRemoveFee.emit(fee);
  }

  onApplyFees(fee: Fee): void {
    if (this.getSplits(fee).length === 1) {
        this.getSplits(fee)[0].splitPay.input = fee.splitFields.input;
    } else {
      let splitInputAmount: number = 0;
      if (fee.splitFields.param === '$') {
        splitInputAmount = fee.splitFields.input;
        this.getSplits(fee).forEach((split) => {
          splitInputAmount > split.amount ? split.splitPay.input = split.amount : split.splitPay.input = splitInputAmount;
        });
      } else {
        splitInputAmount = Math.ceil(parseInt(fee.amount, 10) * fee.splitFields.input / 100);
        this.getSplits(fee).forEach((split) => {
          (splitInputAmount / split.amount) * 100 > 100 ?
            split.splitPay.input = 100 : split.splitPay.input = (splitInputAmount / split.amount) * 100;
        });
      }
    }

    this.updateFees();
  }

  onSelectFee(fee: Fee): void {
    fee.isSelected = !fee.isSelected;
    if (this.selectFees.includes(fee.id)) {
      this.selectFees.splice(this.selectFees.indexOf(fee.id));
      if (this.getSplits(fee)) {
        this.getSplits(fee).forEach((split) => {split.isSelected = false; });
      }
    } else {
      this.selectFees.push(fee.id);
      if (this.getSplits(fee)) {
        this.getSplits(fee).forEach((split) => {split.isSelected = true; });
      }
    }

    this.updateFees();
  }

  getSplits(fee): FeeSplits[] | null {
      return this.fees[this.fees.indexOf(fee) + 1].splits;
  }

  getFee(fee): Fee {
    return this.fees[this.fees.indexOf(fee) - 1];
  }

  onSelectSplit(feeId: number, splitId: number): void {
    this.fees.forEach((fee) => {
      if (fee && fee.type === this.types.splits && fee.splits) {
        fee.splits.forEach((split) => {
          if (split.id === splitId) {
            split.isSelected = !split.isSelected;
          }
        });
      }
      if (fee.id === feeId) {
        fee.isSelected = false;
      }
    });
    this.selectFees.splice(this.selectFees.indexOf(feeId));

    this.updateFees();
  }

  onChangeFeeSplits(changeInput: { fieldValue: string, id: number, type: string }): void {
    this.fees.forEach((fee) => {
      if (fee.id === changeInput.id && fee.type === this.types.fee) {
        if (changeInput.type === 'select') {
          fee.splitFields.param = changeInput.fieldValue;
          this.getSplits(fee).forEach((split) => {
            split.splitPay.param = changeInput.fieldValue;
          });
        } else {
          fee.splitFields.input = parseInt(changeInput.fieldValue, 10);
        }
      }
    });

    this.updateFees();
  }

  onChangeSplit(changeInput: { fieldValue: string, id: number, type: string }): void {
    this.fees.forEach((fee) => {
      if (fee && fee.type === this.types.splits && fee.splits) {
        fee.splits.forEach((split) => {
          if (split.id === changeInput.id) {
            if (changeInput.type === 'select' ) {
              split.splitPay.param = changeInput.fieldValue;
              this.getFee(fee).splitFields.param = changeInput.fieldValue;
              this.setMaxSplitInput(fee, split, changeInput);
            } else {
              split.splitPay.input = parseInt(changeInput.fieldValue, 10);
            }
            }
        });
      }
    });

    this.updateFees();
  }

  setMaxSplitInput(fee: Fee, split: FeeSplits, changeInput: { fieldValue: string, id: number, type: string }): void {
    fee.splits.forEach((feeSplit) => {
      feeSplit.splitPay.param = changeInput.fieldValue;
      if (feeSplit.splitPay.input && feeSplit.splitPay.param === '$' && feeSplit.splitPay.input > feeSplit.amount) {
        feeSplit.splitPay.input = split.amount;
      }
    });

    this.updateFees();
  }

  getTotalSum(): number {
    const totalSumArray = [];
    if (this.fees) {
      this.fees.forEach((fee) => {
          if (fee && fee.type === this.types.splits && fee.splits) {
            fee.splits.forEach((split) => {
              if (split.splitPay.param && split.splitPay.input && split.isSelected) {
                split.splitPay.param === '$' ?
                  totalSumArray.push(split.splitPay.input) :
                  totalSumArray.push(Math.ceil(split.amount * (split.splitPay.input / 100)));
              }
            });
          }
        }
      );
    }
    return totalSumArray.reduce((a, b) => a + b, 0);
  }

  getMaxInput(valueType: string, value: any): number {
    if (valueType === this.types.split && value ) {
      if (value.splitPay && value.splitPay.param === '%') {
        return 100;
      } else if (value.splitPay && value.splitPay.param === '$') {
        return parseInt(value.amount, 10);
      }
    } else if (valueType === this.types.fee && value) {
      if (value.splitFields && value.splitFields.param === '%') {
        return 100;
      } else if (value.splitFields && value.splitFields.param === '$') {
        return parseInt(value.amount, 10);
      }
    }
    return null;
  }

  updateFees() {
    this.fees.forEach((fee) => {
      if (fee.type === 'fee') {
        fee.totalForPay = this.getTotalFeeSum(fee);
      }
    });
    console.log(this.fees);
    this.onUpdateFees.emit(this.fees);
  }

  getTotalFeeSum(sumFee: Fee): number {
    const totalSumArray = [];
    this.getSplits(sumFee).forEach((split) => {
      if (split.splitPay.param && split.splitPay.input) {
        split.splitPay.param === '$' ?
          totalSumArray.push(split.splitPay.input) :
          totalSumArray.push(Math.ceil((split.splitPay.input / 100) * split.amount));
      }
    });
    if (sumFee.splitFields.param === '$') {
      return totalSumArray.reduce((a, b) => a + b, 0);
     } else if (sumFee.splitFields.param === '%') {
      return ((totalSumArray.reduce((a, b) => a + b, 0) / parseInt(sumFee.amount, 10)) * 100);
    }
    return 0;
  }
}
