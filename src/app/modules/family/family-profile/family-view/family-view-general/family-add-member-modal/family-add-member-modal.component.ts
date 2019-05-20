import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FamilyService} from "../../../../services/family.service";
import {Family} from "../../../../model/family.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../../../../../../services/person/person.service";
import {PayersService} from "../../../../../payer-accounts/services/payers.service";
import {RecipientService} from "../../../../../../services/recipient/recipient.service";
import {FeeService} from "../../../../../../services/fee/fee.service";
import {Person} from "../../../../../../models/person.model";
import {Recipient} from "../../../../../../models/recipient.model";

@Component({
  selector: 'app-family-add-member-modal',
  templateUrl: './family-add-member-modal.component.html',
  styleUrls: ['./family-add-member-modal.component.css']
})
export class FamilyAddMemberModalComponent implements OnInit {
  @Output() closeModalAddFamilyMember: EventEmitter<any> = new EventEmitter<any>();

  family: Family;

  errorMsg: string;
  persons: any[] = [];
  roles = ['father', 'mother', 'grandmother', 'grandfather', 'student', 'child', 'aunt', 'uncle',];

  private familyPersonForm: FormGroup;

  constructor(private familyService: FamilyService,
              private personService: PersonService,
              private fb: FormBuilder,) {

    this.familyPersonForm = fb.group({
      members: [null, Validators.required],
      // name: [null, Validators.required],
      // primary: [false],
      roles: [this.roles[0], Validators.required],
      // fees: [null, Validators.required],
      // receipt: [null],
    });

    // this.familyPersonForm.controls['members'].valueChanges.subscribe(value => {
    //
    //   if (!this.payerAccountForm.controls['name'].touched) {
    //     let nameValue = '';
    //     const membersLengt = value.length;
    //
    //     value.forEach((member, index) => {
    //       nameValue += member.name;
    //       if (index !== membersLengt - 1) {
    //         nameValue += ' & ';
    //       }
    //     });
    //
    //     this.payerAccountForm.controls['name'].setValue(nameValue);
    //   }
    // });

  }

  ngOnInit() {
    this.getFamily();
    this.getPersons();
  }

  getFamily() {
    this.familyService.family.subscribe((res) => {
      this.family = res;
    });
  }

  getPersons() {
    this.personService.getPersons()
      .subscribe((res) => {
        res.map((person: Person) => {
          this.persons.push({
            id: person.id,
            name: `${person.first_name} ${person.last_name}`,
          });
        });
      });
  }

  onCloseAddFamilyMemberModal() {
    this.closeModalAddFamilyMember.emit(true);
  }

  // onCreatePayerAccount() {
  //   this.errorMsg = null;
  //
  //   const data = {
  //     name: this.payerAccountForm.value.name,
  //     type: this.payerAccountForm.value.type,
  //     persons: [],
  //     primary: this.payerAccountForm.value.primary,
  //   };
  //
  //   this.payerAccountForm.value.members.forEach((member) => {
  //     data.persons.push({ person_id: member.id });
  //   });
  //
  //   this.payersService.addPayerAccount(data)
  //     .subscribe((res) => {
  //       this.closeFormPayerAccount.emit(true);
  //     }, (err) => {
  //       if (err.error && err.error.errors) {
  //         this.errorMsg = err.error.errors;
  //       }
  //     });
  // }

  onAddFamilyPerson() {

  }
}
