import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Family} from "../../../../../../../models/family/family.model";
import {FamilyPersonService} from "../../../../../../../services/family/family-person.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FamilyRoles} from "../../../../../../../enums/family-roles";
import {PersonService} from "../../../../../../../services/person/person.service";
import {Gender} from "../../../../../../../enums/gender";
import {NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-family-add-new-parent',
  templateUrl: './family-add-new-parent.component.html',
  styleUrls: ['./family-add-new-parent.component.css']
})
export class FamilyAddNewParentComponent implements OnInit {
  @Output() closeModalAddFamilyMember: EventEmitter<any> = new EventEmitter<any>();
  @Input() family: Family;
  @Input() role: string;

  date = new Date();

  get minDate() {
    return {day: 1, month: 1, year: this.date.getFullYear() - 100};
  }

  get maxDate() {
    return {day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear()};
  }

  familyRoles = FamilyRoles;
  gender = Gender;
  familyParentForm: FormGroup;

  constructor(private familyPersonService: FamilyPersonService,
              private personService: PersonService,
              private fb: FormBuilder,
              private parserFormatter: NgbDateParserFormatter) {
    this.initFamilyNewPersonForm();
  }

  ngOnInit() {
  }

  initFamilyNewPersonForm() {
    this.familyParentForm = this.fb.group({
      first_name: [null, Validators.required],
      middle_name: [null],
      last_name: [null],
      dob: [null],
      hebrew_full_name: [null],
      maiden_name: [null],
      occupation: [null],
      address: [null],
      corporate_phone: [null],
      contact_phone: [null],
      contact_email: [null],
    });
  }

  addFamilyParent() {
    if (this.familyParentForm.invalid) return;
    let data = {
      ...this.familyParentForm.value,
      gender: this.getGenderByRole(this.role),
      dob: this.parserFormatter.format(this.familyParentForm.value.dob)
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
      case this.familyRoles.father:
        return this.gender.MALE;
      case this.familyRoles.mother:
        return this.gender.FEMALE;
      default:
        return null;
    }
  }
}
