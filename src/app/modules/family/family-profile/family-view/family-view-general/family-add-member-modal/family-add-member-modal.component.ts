import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FamilyService} from "../../../../services/family.service";
import {Family} from "../../../../../../models/family/family.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../../../../../../services/person/person.service";
import {PayersService} from "../../../../../payer-accounts/services/payers.service";
import {RecipientService} from "../../../../../../services/recipient/recipient.service";
import {FeeService} from "../../../../../../services/fee/fee.service";
import {Person} from "../../../../../../models/person.model";
import {Recipient} from "../../../../../../models/recipient.model";
import {FamilyRoles} from "../../../../../../enums/family-roles";

@Component({
  selector: 'app-family-add-member-modal',
  templateUrl: './family-add-member-modal.component.html',
  styleUrls: ['./family-add-member-modal.component.css']
})
export class FamilyAddMemberModalComponent implements OnInit {
  @Output() closeModalAddFamilyMember: EventEmitter<any> = new EventEmitter<any>();

  family: Family;

  persons: any[] = [];
  roles = [
    FamilyRoles.father,
    FamilyRoles.mother,
    FamilyRoles.grandmother, FamilyRoles.grandfather,
    FamilyRoles.student,
    FamilyRoles.child,
    FamilyRoles.aunt,
    FamilyRoles.uncle,
  ];

  private familyPersonForm: FormGroup;

  constructor(private familyService: FamilyService,
              private personService: PersonService,
              private fb: FormBuilder,) {
    this.initFamilyPersonForm();
  }

  ngOnInit() {
    this.getFamily();
    this.getPersons();
  }

  initFamilyPersonForm() {
    this.familyPersonForm = this.fb.group({
      members: [null, Validators.required],
      role: [this.roles[0], Validators.required],
    });
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

  addFamilyPerson() {
    const data = {
      family_id: this.family.family_id,
      family_name: this.family.name,
      person_ids: [],
      person_role: this.familyPersonForm.value.role,
    };
    console.log(data);
  }
}
