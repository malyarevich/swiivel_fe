import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FamilyPerson} from "../../../../../../../models/family/family-person.model";
import {FamilyRoles} from "../../../../../../../enums/family-roles";
import {Gender} from "../../../../../../../enums/gender";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FamilyPersonService} from "../../../../../../../services/family/family-person.service";

@Component({
  selector: 'app-family-edit-parent-sibling',
  templateUrl: './family-edit-parent-sibling.component.html',
  styleUrls: ['./family-edit-parent-sibling.component.css']
})
export class FamilyEditParentSiblingComponent implements OnInit {
  @Output() closeModalEditFamilyMember: EventEmitter<any> = new EventEmitter<any>();
  @Input() familyPerson: FamilyPerson;

  familyRoles = FamilyRoles;
  gender = Gender;

  date = new Date();

  get minDate() {
    return {day: 1, month: 1, year: this.date.getFullYear() - 100};
  }

  get maxDate() {
    return {day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear()};
  }

  familySiblingForm: FormGroup;

  constructor(private familyPersonService: FamilyPersonService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initFamilyNewPersonForm();
  }

  initFamilyNewPersonForm() {
    this.familySiblingForm = this.fb.group({
      first_name: [this.familyPerson.person.first_name, Validators.required],
      middle_name: [this.familyPerson.person.middle_name],
      last_name: [this.familyPerson.person.last_name],
    });
  }

  updateFamilySibling() {
    if (this.familySiblingForm.invalid) return;
    let data = {
      person: {
        ...this.familySiblingForm.value,
      },
    };
    this.familyPersonService.update(data, this.familyPerson.id);
    this.onCloseEditFamilyMemberModal();
  }

  onCloseEditFamilyMemberModal() {
    this.closeModalEditFamilyMember.emit(true);
  }

}
