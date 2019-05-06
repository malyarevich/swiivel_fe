import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PersonService } from '../../services/person/person.service';

import { Person } from '../../models/person.model';
import {PayersService} from '../payer-accounts/services/payers.service';

@Component({
  selector: 'app-form-payer-account-modal',
  templateUrl: 'form-payer-account-modal.component.html',
  styleUrls: ['./form-payer-account-modal.component.scss']
})
export class FormPayerAccountModalComponent implements OnInit {
  @Output() closeFormPayerAccount: EventEmitter<any> = new EventEmitter<any>();

  private payerAccountForm: FormGroup;

  persons: any[] = [];
  types = ['Payer', 'Other'];

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private payersService: PayersService,
  ) {
    this.payerAccountForm = fb.group({
      members: [null, Validators.required],
      name: [null, Validators.required],
      type: [null, Validators.required],
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
  }

  onCreatePayerAccount() {
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
        console.log(res);
      });
  }

  onCloseFormPayerAccountModal() {
    this.closeFormPayerAccount.emit(true);
  }
}
