import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Family} from "../../../../../../../models/family/family.model";
import {FamilyRoles} from "../../../../../../../enums/family-roles";
import {Gender} from "../../../../../../../enums/gender";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FamilyPersonService} from "../../../../../../../services/family/family-person.service";
import {PersonService} from "../../../../../../../services/person/person.service";

@Component({
  selector: 'app-family-add-new-parent-sibling',
  templateUrl: './family-add-new-parent-sibling.component.html',
  styleUrls: ['./family-add-new-parent-sibling.component.css']
})
export class FamilyAddNewParentSiblingComponent implements OnInit {
  @Output() closeModalAddFamilyMember: EventEmitter<any> = new EventEmitter<any>();
  @Input() family: Family;
  @Input() role: string;

  familyRoles = FamilyRoles;
  gender = Gender;
  familySiblingForm: FormGroup;

  constructor(private familyPersonService: FamilyPersonService,
              private personService: PersonService,
              private fb: FormBuilder) {
    this.initFamilyNewPersonForm();
  }

  ngOnInit() {
  }

  initFamilyNewPersonForm() {
    this.familySiblingForm = this.fb.group({
      first_name: [null, Validators.required],
      middle_name: [null],
      last_name: [null],
    });
  }

  addFamilySibling() {
    if (this.familySiblingForm.invalid) return;
    let data = {
      ...this.familySiblingForm.value,
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
      case this.familyRoles.uncle:
        return this.gender.MALE;
      case this.familyRoles.aunt:
        return this.gender.FEMALE;
      default:
        return null;
    }
  }
}
