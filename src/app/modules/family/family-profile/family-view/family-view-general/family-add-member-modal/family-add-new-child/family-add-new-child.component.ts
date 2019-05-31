import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Family} from "../../../../../../../models/family/family.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Person} from "../../../../../../../models/person.model";
import {PersonService} from "../../../../../../../services/person/person.service";
import {Gender} from "../../../../../../../enums/gender";
import {FamilyPersonService} from "../../../../../../../services/family/family-person.service";

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

  constructor(private fb: FormBuilder,
              private personService: PersonService,
              private familyPersonService: FamilyPersonService) {
    this.initFamilyNewChildForm();
  }

  ngOnInit() {
    this.getPersons();
  }

  initFamilyNewChildForm() {
    this.familyChildForm = this.fb.group({
      adopted: [null],
      parents: [null],
      first_name: [null, Validators.required],
      middle_name: [null],
      last_name: [null],
      legal_name: [null],
      dob: [null],
      hebrew_dob: [null],
      full_hebrew_name: [null],
      gender: [null],
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

  addFamilyChild() {
    if (this.familyChildForm.invalid) return;
    let data = {
      parents: this.familyChildForm.value.parents.map((item) => item.id),
      first_name: this.familyChildForm.value.first_name,
      middle_name: this.familyChildForm.value.middle_name,
      last_name: this.familyChildForm.value.last_name,
      legal_name: this.familyChildForm.value.legal_name,
      dob: this.familyChildForm.value.dob,
      hebrew_dob: this.familyChildForm.value.hebrew_dob,
      full_hebrew_name: this.familyChildForm.value.full_hebrew_name,
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
      family_id: this.family.family_id,
      family_name: this.family.name,
      id_person: personId,
      person_role: this.role,
      adopted: this.familyChildForm.value.adopted ? 1 : null,
    };
    this.familyPersonService.add(data);
  }

  onCloseAddFamilyMemberModal() {
    this.closeModalAddFamilyMember.emit(true);
  }
}
