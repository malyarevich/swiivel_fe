import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Family} from "../../../../../../../models/family/family.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Person} from "../../../../../../../models/person.model";
import {PersonService} from "../../../../../../../services/person/person.service";
import {Gender} from "../../../../../../../enums/gender";
import {FamilyPersonService} from "../../../../../../../services/family/family-person.service";
import {FamilyRoles} from "../../../../../../../enums/family-roles";

@Component({
  selector: 'app-family-add-new-child',
  templateUrl: './family-add-new-child.component.html',
  styleUrls: ['./family-add-new-child.component.css']
})
export class FamilyAddNewChildComponent implements OnInit {
  @Output() closeModalAddFamilyMember: EventEmitter<any> = new EventEmitter<any>();
  @Input() family: Family;
  @Input() role: string;

  familyChildForm: FormGroup;

  persons: any[] = [];
  GENDER = Gender;
  FAMILY_ROLES = FamilyRoles;

  constructor(private fb: FormBuilder,
              private personService: PersonService,
              private familyPersonService: FamilyPersonService) {
    this.initFamilyNewChildForm();
  }

  ngOnInit() {
    this.getPersons();
  }

  initFamilyNewChildForm() {

    let controlsConfig = {
      adopted: [null],
      parents: [null],
      first_name: [null, Validators.required],
      middle_name: [null],
      last_name: [null],
      legal_name: [null],
      dob: [null],
      hebrew_dob: [null],
      hebrew_full_name: [null],
      gender: [null],
      person_info: this.fb.group({
        student_current_grade: [null],
        student_start_grade: [null],
        student_current_school: [null],
        student_previous_school: [null],
        student_medical_conditions: [null],
        student_allergies: [null],
        student_medications: [null],
        student_physician: [null],
        student_physician_country: [null],
        student_physician_address: [null],
        student_physician_phone: [null],
        student_first_contact_relationship: [null],
        student_first_contact_full_name: [null],
        student_first_contact_cell_phone: [null],
        student_second_contact_full_name: [null],
        student_second_contact_relationship: [null],
        student_second_contact_cell_phone: [null],
      })
    };

    this.familyChildForm = this.fb.group(controlsConfig);
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

  addFamilyChild() {
    if (this.familyChildForm.invalid) return;
    let data = {
      // parents: this.familyChildForm.value.parents.map((item) => item.id),
      first_name: this.familyChildForm.value.first_name,
      middle_name: this.familyChildForm.value.middle_name,
      last_name: this.familyChildForm.value.last_name,
      legal_name: this.familyChildForm.value.legal_name,
      dob: this.familyChildForm.value.dob,
      hebrew_dob: this.familyChildForm.value.hebrew_dob,
      hebrew_full_name: this.familyChildForm.value.hebrew_full_name,
      gender: this.familyChildForm.value.gender,
    };

    this.personService.addPerson(data).subscribe((res) => {
      if (res.created) {
        this.addFamilyPerson(res.data.id);
      }
    }, (error) => console.log(error));
    this.onCloseAddFamilyMemberModal();
  }

  addFamilyPerson(personId) {
    const data = {
      parents: this.familyChildForm.value.parents.map((item) => item.id),
      family_id: this.family.family_id,
      family_name: this.family.name,
      id_person: personId,
      person_role: this.role,
      adopted: this.familyChildForm.value.adopted ? 1 : null,
    };
    if(this.role === this.FAMILY_ROLES.student) {
      data['person_info'] = this.familyChildForm.value.person_info;
    }
    this.familyPersonService.add(data);
    this.familyPersonService.getByFamilyId(this.family.family_id);
  }

  onCloseAddFamilyMemberModal() {
    this.closeModalAddFamilyMember.emit(true);
  }
}
