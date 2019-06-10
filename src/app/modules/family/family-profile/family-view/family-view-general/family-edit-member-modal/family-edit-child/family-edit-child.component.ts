import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FamilyPerson} from "../../../../../../../models/family/family-person.model";
import {FamilyRoles} from "../../../../../../../enums/family-roles";
import {Gender} from "../../../../../../../enums/gender";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FamilyPersonService} from "../../../../../../../services/family/family-person.service";
import {NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";
import {PersonService} from "../../../../../../../services/person/person.service";
import {Person} from "../../../../../../../models/person.model";

@Component({
  selector: 'app-family-edit-child',
  templateUrl: './family-edit-child.component.html',
  styleUrls: ['./family-edit-child.component.css']
})
export class FamilyEditChildComponent implements OnInit {
  @Output() closeModalEditFamilyMember: EventEmitter<any> = new EventEmitter<any>();
  @Input() familyPerson: FamilyPerson;

  familyPersons: any[] = [];
  GENDER = Gender;
  FAMILY_ROLES = FamilyRoles;
  familyChildForm: FormGroup;
  date = new Date();

  get minDate() {
    return {day: 1, month: 1, year: this.date.getFullYear() - 100};
  }

  get maxDate() {
    return {day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear()};
  }


  constructor(private fb: FormBuilder,
              private personService: PersonService,
              private familyPersonService: FamilyPersonService,
              private parserFormatter: NgbDateParserFormatter) {
  }

  ngOnInit() {
    this.initFamilyChildForm();
    this.getFamilyPersons();
  }

  initFamilyChildForm() {

    let controlsConfig = {
      adopted: [this.familyPerson.adopted],
      parents: [this.familyPerson.parents.map((parent) => {
        return {id: parent.person.id, name: parent.person.first_name + parent.person.last_name}
      })],
      first_name: [this.familyPerson.person.first_name, Validators.required],
      middle_name: [this.familyPerson.person.middle_name],
      last_name: [this.familyPerson.person.last_name],
      legal_name: [this.familyPerson.person.legal_name],
      dob: [this.parserFormatter.parse(this.familyPerson.person.dob)],
      hebrew_dob: [this.familyPerson.person.hebrew_dob],
      hebrew_full_name: [this.familyPerson.person.hebrew_full_name],
      gender: [this.familyPerson.person.gender],
      deceased: [this.familyPerson.person.deceased || 0],
      dod: [this.parserFormatter.parse(this.familyPerson.person.dod) || null],
      person_info: null
    };

    if(this.familyPerson.person_role === this.FAMILY_ROLES.student && this.familyPerson.student_info) {
      controlsConfig = {
        ...controlsConfig,
        person_info: this.fb.group({
          student_current_grade: [this.familyPerson.student_info.student_current_grade],
          student_start_grade: [this.familyPerson.student_info.student_start_grade],
          student_current_school: [this.familyPerson.student_info.student_current_school],
          student_previous_school: [this.familyPerson.student_info.student_previous_school],
          student_medical_conditions: [this.familyPerson.student_info.student_medical_conditions],
          student_allergies: [this.familyPerson.student_info.student_allergies],
          student_medications: [this.familyPerson.student_info.student_medications],
          student_physician: [this.familyPerson.student_info.student_physician],
          student_physician_country: [this.familyPerson.student_info.student_physician_country],
          student_physician_address: [this.familyPerson.student_info.student_physician_address],
          student_physician_phone: [this.familyPerson.student_info.student_physician_phone],
          student_first_contact_relationship: [this.familyPerson.student_info.student_first_contact_relationship],
          student_first_contact_full_name: [this.familyPerson.student_info.student_first_contact_full_name],
          student_first_contact_cell_phone: [this.familyPerson.student_info.student_first_contact_cell_phone],
          student_second_contact_full_name: [this.familyPerson.student_info.student_second_contact_full_name],
          student_second_contact_relationship: [this.familyPerson.student_info.student_second_contact_relationship],
          student_second_contact_cell_phone: [this.familyPerson.student_info.student_second_contact_cell_phone],
        })
      }
    }

    this.familyChildForm = this.fb.group(controlsConfig);
  }

  getFamilyPersons() {
    this.familyPersonService.getAllRequest()
      .subscribe((res) => {
        res.map((familyPerson: FamilyPerson) => {
          this.familyPersons.push({
            id: familyPerson.person.id,
            name: `${familyPerson.person.first_name} ${familyPerson.person.last_name}`,
          });
        });
      });
  }

  updateFamilyChild() {
    if (this.familyChildForm.invalid) return;
    let data = {
      person_role:this.familyPerson.person_role,
      adopted: this.familyChildForm.value.adopted ? 1 : 0,
      person: {
        ...this.familyChildForm.value,
        dob: this.parserFormatter.format(this.familyChildForm.value.dob) || null,
        deceased: this.familyChildForm.value.deceased ? 1 : 0,
        dod: this.parserFormatter.format(this.familyChildForm.value.dod) || null,
      },
      parents: this.familyChildForm.value.parents ? this.familyChildForm.value.parents.map((item) => item.id) : [],
      person_info: this.familyChildForm.value.person_info || [],
    };
    this.familyPersonService.update(data, this.familyPerson.id);
    this.onCloseEditFamilyMemberModal();
  }

  onCloseEditFamilyMemberModal() {
    this.closeModalEditFamilyMember.emit(true);
  }

}
