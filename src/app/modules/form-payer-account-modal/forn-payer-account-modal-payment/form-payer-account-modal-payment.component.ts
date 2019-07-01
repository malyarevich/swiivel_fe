import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-payer-account-modal-payment',
  templateUrl: './form-payer-account-modal-payment.component.html',
  styleUrls: ['./form-payer-account-modal-payment.component.scss']
})

export class FormPayerAccountModalPaymentComponent implements OnInit {

  @Input() parentForm: FormGroup;

  @Output() onChangePaymentForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  paymentForm: FormGroup;
  payerPaymentMethods: FormArray;

  public paymentMethod = null;
  public isSelectVisible = false;

  public paymentMethods: string[] = ['Ach', 'Credit Card'];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      payerPaymentMethods: this.formBuilder.array([])
    });

    this.paymentForm.controls['payerPaymentMethods'].valueChanges.subscribe(value => {
      this.onChangePaymentForm.emit(this.paymentForm);
    });
  }

  createPayment(method: string): FormGroup {
    if (method === 'Credit Card') {
      return this.formBuilder.group({
        method_type: new FormControl(method),
        method_name: new FormControl(''),
        name: new FormControl(''),
        number: new FormControl(''),
        expiry_year: new FormControl(''),
        expiry_month: new FormControl(''),
        cvv: new FormControl('')
      });
    } else {
      return this.formBuilder.group({
        method_type: new FormControl(method),
        method_name: new FormControl(''),
        number: new FormControl(''),
        account_type: new FormControl('Checking'),
        routing: new FormControl(''),
        account: new FormControl('')
      });
    }
  }

  addPayment(method: string): void {
    this.paymentMethodsArray.insert(0, this.createPayment(method));
  }

  get paymentMethodsArray(): FormArray {
    return this.paymentForm.get('payerPaymentMethods') as FormArray;
  }

  onSelectMethod(method): void {
    this.isSelectVisible = !this.isSelectVisible;
    this.addPayment(method.fieldValue);
  }

  onChangeMethodSelect(): void {
    this.isSelectVisible = !this.isSelectVisible;
    if (!this.isSelectVisible) {
      this.paymentMethod = '';
    }
  }

  onDeleteMethod(index): void {
    this.paymentMethodsArray.removeAt(index);
  }

}
