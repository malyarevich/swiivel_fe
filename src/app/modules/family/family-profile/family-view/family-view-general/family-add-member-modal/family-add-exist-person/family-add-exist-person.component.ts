import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Family} from "../../../../../../../models/family/family.model";
import {familyRoles} from "../../../../../../../enums/family-roles";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../../../../../../../services/person/person.service";
import {FamilyPersonService} from "../../../../../../../services/family/family-person.service";
import {Person} from "../../../../../../../models/person.model";

@Component({
  selector: 'app-family-add-exist-person',
  templateUrl: './family-add-exist-person.component.html',
  styleUrls: ['./family-add-exist-person.component.css']
})
export class FamilyAddExistPersonComponent implements OnInit {
  @Output() closeModalAddFamilyMember: EventEmitter<any> = new EventEmitter<any>();
  @Input() family: Family;

  persons: any[] = [];
  roles = familyRoles;

  private familyPersonForm: FormGroup;

  constructor(private personService: PersonService,
              private familyPersonService: FamilyPersonService,
              private fb: FormBuilder) {
    this.initFamilyPersonForm();
  }

  ngOnInit() {
    this.getPersons();
  }

  initFamilyPersonForm() {
    this.familyPersonForm = this.fb.group({
      members: [null, Validators.required],
      role: [this.roles[0], Validators.required],
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

  addFamilyPerson() {
    const data = {
      family_id: this.family.family_id,
      family_name: this.family.name,
      id_person: 0,
      person_role: this.familyPersonForm.value.role,
    };
    this.familyPersonForm.value.members.map((member) => {
      data.id_person = member.id;
      this.familyPersonService.add(data);
    });

    this.onCloseAddFamilyMemberModal();
  }

  onCloseAddFamilyMemberModal() {
    this.closeModalAddFamilyMember.emit(true);
  }
}
