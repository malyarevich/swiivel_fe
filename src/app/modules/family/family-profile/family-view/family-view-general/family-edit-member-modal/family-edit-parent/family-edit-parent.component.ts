import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FamilyPerson} from "../../../../../../../models/family/family-person.model";
import {FamilyRoles} from "../../../../../../../enums/family-roles";
import {Gender} from "../../../../../../../enums/gender";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FamilyPersonService} from "../../../../../../../services/family/family-person.service";

@Component({
  selector: 'app-family-edit-parent',
  templateUrl: './family-edit-parent.component.html',
  styleUrls: ['./family-edit-parent.component.css']
})
export class FamilyEditParentComponent implements OnInit {
  @Output() closeModalEditFamilyMember: EventEmitter<any> = new EventEmitter<any>();
  @Input() familyPerson: FamilyPerson;

  familyRoles = FamilyRoles;
  gender = Gender;

  familyParentForm: FormGroup;

  constructor(private familyPersonService: FamilyPersonService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initFamilyNewPersonForm();
  }

  initFamilyNewPersonForm() {
    this.familyParentForm = this.fb.group({
      first_name: [this.familyPerson.person.first_name, Validators.required],
      middle_name: [this.familyPerson.person.middle_name],
      last_name: [this.familyPerson.person.last_name],
      dob: [this.familyPerson.person.dob],
      hebrew_full_name: [this.familyPerson.person.hebrew_full_name],
      maiden_name: [this.familyPerson.person.maiden_name],
      occupation: [this.familyPerson.person.occupation],
      address: [this.familyPerson.person.address],
      corporate_phone: [this.familyPerson.person.contact_phone],
      contact_phone: [this.familyPerson.person.contact_phone],
      contact_email: [this.familyPerson.person.contact_email],
    });
  }

  updateFamilyParent() {
    if (this.familyParentForm.invalid) return;
    let data = {
      person: {...this.familyParentForm.value},
    };
    this.familyPersonService.update(data, this.familyPerson.id);
    this.onCloseEditFamilyMemberModal();
  }

  onCloseEditFamilyMemberModal() {
    this.closeModalEditFamilyMember.emit(true);
  }
}
