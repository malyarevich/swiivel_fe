import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Family} from "../../../../../../../models/family/family.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Person} from "../../../../../../../models/person.model";
import {PersonService} from "../../../../../../../services/person/person.service";

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

  constructor(private fb: FormBuilder, private personService: PersonService) {
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
      // occupation: [null],
      // address: [null],
      // corporate_phone: [null],
      // contact_phone: [null],
      // contact_email: [null],
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

  }

  onCloseAddFamilyMemberModal() {
    this.closeModalAddFamilyMember.emit(true);
  }
}
