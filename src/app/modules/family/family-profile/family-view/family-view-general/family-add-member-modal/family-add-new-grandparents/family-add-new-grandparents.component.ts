import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Family} from "../../../../../../../models/family/family.model";
import {FamilyPersonService} from "../../../../../../../services/family/family-person.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FamilyRoles} from "../../../../../../../enums/family-roles";
import {PersonService} from "../../../../../../../services/person/person.service";
import {Gender} from "../../../../../../../enums/gender";

@Component({
  selector: 'app-family-add-new-grandparents',
  templateUrl: './family-add-new-grandparents.component.html',
  styleUrls: ['./family-add-new-grandparents.component.css']
})
export class FamilyAddNewGrandparentsComponent implements OnInit {
  @Output() closeModalAddFamilyMember: EventEmitter<any> = new EventEmitter<any>();
  @Input() family: Family;
  @Input() role: string;

  familyRoles = FamilyRoles;
  gender = Gender;
  familyGrandParentForm: FormGroup;

  constructor(private familyPersonService: FamilyPersonService,
              private personService: PersonService,
              private fb: FormBuilder) {
    this.initFamilyNewPersonForm();
  }

  ngOnInit() {
  }

  initFamilyNewPersonForm() {
    this.familyGrandParentForm = this.fb.group({
      first_name: [null, Validators.required],
      middle_name: [null],
      last_name: [null],
      country: [null],
      state: [null],
      city: [null],
      address: [null],
      zip: [null],
      contact_phone: [null],
      contact_email: [null],
    });
  }

  addFamilyParent() {
    if (this.familyGrandParentForm.invalid) return;
    let data = {
      ...this.familyGrandParentForm.value,
      gender: this.getGenderByRole(this.role),
    };
    this.personService.addPerson(data).subscribe((res) => {
      if (res.created) {
        this.addFamilyPerson(res.data.id);
      }
    }, (error) => console.log(error));
    this.onCloseAddFamilyMemberModal();
  }

  async addFamilyPerson(personId) {
    const data = {
      family_id: this.family.family_id,
      family_name: this.family.name,
      id_person: personId,
      person_role: this.role,
    };
    this.familyPersonService.add(data);
  }

  onCloseAddFamilyMemberModal() {
    this.closeModalAddFamilyMember.emit(true);
  }

  getGenderByRole(role) {
    switch (role) {
      case this.familyRoles.grandfather:
        return this.gender.MALE;
      case this.familyRoles.grandmother:
        return this.gender.FEMALE;
      default:
        return null;
    }
  }
}
