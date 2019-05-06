import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Person } from '../../models/person.model';
import { Recipient } from '../../models/recipient.model';

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
  persons: any[] = [];
  students: any[] = [];
  types = ['Payer', 'Other'];

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private payersService: PayersService,
    private recipientService: RecipientService,
  ) {
    this.payerAccountForm = fb.group({
      members: [null, Validators.required],
      name: [null, Validators.required],
      type: [this.types[0], Validators.required],
      fees: [null, Validators.required],
    });

    this.payerAccountForm.controls['members'].valueChanges.subscribe(value => {
      if (!this.payerAccountForm.controls['name'].touched) {
        let nameValue = '';
        const membersLengt = value.length;

        value.forEach((member, index) => {
          nameValue += member.name;
          if (index !== membersLengt - 1) {
            nameValue += ' & ';
          }
        });

        this.payerAccountForm.controls['name'].setValue(nameValue);
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
  }

  onCreatePayerAccount() {
    this.errorMsg = null;

    const data = {
      name: this.payerAccountForm.value.name,
      type: this.payerAccountForm.value.type,
      persons: [],
    };

    this.payerAccountForm.value.members.forEach((member) => {
      data.persons.push({ person_id: member.id });
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

  onCloseFormPayerAccountModal() {
    this.closeFormPayerAccount.emit(true);
  }
}
