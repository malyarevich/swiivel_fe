import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Person } from '../../models/person.model';
import { Recipient } from '../../models/recipient.model';

import { FeeService } from '../../services/fee/fee.service';
import { PersonService } from '../../services/person/person.service';
import { PayersService } from '../payer-accounts/services/payers.service';
import { RecipientService } from '../../services/recipient/recipient.service';

@Component({
  selector: 'app-form-payer-account-modal',
  templateUrl: 'form-payer-account-modal.component.html',
  styleUrls: ['./form-payer-account-modal.component.scss']
})
export class FormPayerAccountModalComponent implements OnInit {
  @Output() closeFormPayerAccount: EventEmitter<any> = new EventEmitter<any>();

  private payerAccountForm: FormGroup;

  errorMsg: string;
  fees: any = {};
  persons: any[] = [];
  students: any[] = [];
  types = ['Payer', 'Other'];

  feesData: any[] = [];

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private payersService: PayersService,
    private recipientService: RecipientService,
    private feeService: FeeService,
  ) {
    this.payerAccountForm = fb.group({
      members: [null, Validators.required],
      name: [null, Validators.required],
      primary: [false],
      type: [this.types[0], Validators.required],
      recipients: [null, Validators.required],
      autoreceipt: [false],
      receipt: [null],
      fees: [null, Validators.required],
      paymentMethodsForm: this.fb.group(
        {
          payerPaymentMethods: this.fb.array(
            [this.fb.group([null])])
        })
    });

    this.payerAccountForm.controls['members'].valueChanges.subscribe(value => {
      if (!this.payerAccountForm.controls['name'].touched) {
        let nameValue = '';
        const membersLength = value.length;

        value.forEach((member, index) => {
          nameValue += member.name;
          if (index !== membersLength - 1) {
            nameValue += ' & ';
          }
        });

        this.payerAccountForm.controls['name'].setValue(nameValue);
      }

      if (!this.payerAccountForm.controls['receipt'].touched) {
        this.payerAccountForm.controls['receipt'].setValue(value);
      }
    });

    this.payerAccountForm.controls['recipients'].valueChanges.subscribe(value => {
      if (value && value.length) {
        value.forEach(recipient => {
          if (!this.fees[recipient.id]) {
            this.fees[recipient.id] = [];

            this.feeService.getRecipientFee(recipient.id)
              .subscribe((res) => {
                res.data.fees.forEach(fee => {
                  this.fees[recipient.id].push({
                    id: fee.id,
                    name: fee.name,
                    price: fee.amount,
                  });
                });
              });
          }
        });
      }
    });
  }

  ngOnInit() {
    this.personService.getAllPersons()
      .subscribe((res) => {
        if (res.data.total > 0) {
          res.data.persons.forEach((person: Person) => {
            this.persons.push({
              id: person.id,
              name: `${person.first_name} ${person.last_name}`,
            });
          });
        }
      });

    this.recipientService.getAllStudents()
      .subscribe((res) => {
        if (res.data.total > 0) {
          res.data.recipients.forEach((recispient: Recipient) => {
            this.students.push({
              id: recispient.id,
              name: `${recispient.first_name} ${recispient.last_name}`,
            });
          });
        }
      });

    this.feeService.getRecipientFee(1)
      .subscribe((res) => {
        res.data.fees.forEach((fee, index) => {
          const feeData = {
            amount: fee.amount,
            id: fee.id,
            name: fee.name,
            type: 'fee',
            backgroundWhite: false,
            open: false,
            isSelected: false,
            isActive: false,
            splitFields: {input: '', param: '$'},
            totalForPay: 0
          };
          const feeSplits = {
            id: fee.id,
            splits: fee.splits,
            type: 'splits',
            backgroundWhite: false,
            open: false,
            isActive: false,
            isSelected: false,
          };

          feeSplits.splits.forEach((split) => {
            split.splitPay = {input: 0, param: '$'};
            split.payment = 0;
          });

          if (index % 2 === 0) {
            feeData.backgroundWhite = true;
            feeSplits.backgroundWhite = true;
          }

          this.feesData.push(feeData);
          this.feesData.push(feeSplits);
        });
      });
  }

  onCreatePayerAccount(): void {
    this.errorMsg = null;

    const data = {
      name: this.payerAccountForm.value.name,
      type: this.payerAccountForm.value.type,
      persons: [],
      primary: this.payerAccountForm.value.primary,
      fees: [],
      payment_methods: [],
      autoreceipt_send: +this.payerAccountForm.value.autoreceipt
    };

    this.payerAccountForm.value.fees.forEach((fee) => {
      if (fee.type === 'fee' && fee.totalForPay > 0) {
        data.fees.push(
          {
            fee_id: fee.id,
            responsibility_amount: fee.totalForPay,
            is_percentage: +(fee.splitFields.param === '%'),
            splits: this.getSplits(fee)
          });
      }
    });

    if (this.payerPaymentMethods.length !== 0 && this.payerPaymentMethods.value[0][0]) {
      this.payerPaymentMethods.value[0].forEach((method) => {
        if (method.method_type === 'Credit Card') {
          data.payment_methods.push({
            method_type: method.method_type,
            number: method.number,
            method_name: method.method_name,
            name: method.name,
            expiry_month: method.expiry_month,
            expiry_year: method.expiry_year,
            cvv: method.cvv
          });
        } else {
          data.payment_methods.push({
            method_type: method.method_type,
            method_name: method.method_name,
            account_type: method.account_type,
            routing: method.routing,
            account: method.account,
          });
        }
      });
    }

    this.payerAccountForm.value.members.forEach((member) => {
      data.persons.push({person_id: member.id, receipt_send: 1});
    });

    this.payersService.addPayerAccount(data)
      .subscribe((res) => {
        this.closeFormPayerAccount.emit(true);
      }, (err) => {
        if (err.error && err.error.errors) {
          this.errorMsg = err.error.errors;
        }
      });
  }

  onCloseFormPayerAccountModal(): void {
    this.closeFormPayerAccount.emit(true);
  }

  onRemoveRecipient(recipient) {
    const recipients = [];

    if (this.payerAccountForm.value['recipients'].length) {
      this.payerAccountForm.value['recipients'].forEach(item => {
        if (item.id !== recipient.id) {
          recipients.push(item);
        }
      });

      this.payerAccountForm.controls['recipients'].setValue(recipients);
    }
  }

  changePaymentForm(paymentForm: FormGroup): void {
    while (this.payerPaymentMethods.length !== 0) {
      this.payerPaymentMethods.removeAt(0);
    }

    this.payerPaymentMethods.push(paymentForm.controls.payerPaymentMethods);
  }

  get payerPaymentMethods(): FormArray {
    return this.payerAccountForm.get('paymentMethodsForm').get('payerPaymentMethods') as FormArray;
  }

  updateFee(fees): void {
    this.payerAccountForm.controls.fees.setValue(fees);
    this.feesData = fees;
  }

  getSplits(fee): Array<{ id: number, amount: number }> {
    const splits = [];

    this.payerAccountForm.value.fees[this.payerAccountForm.value.fees.indexOf(fee) + 1].splits.forEach((split) => {
      splits.push({id: split.id, amount: split.splitPay.input, is_percentage: +(split.splitPay.param === '%')});
    });

    return splits;
  }
}

