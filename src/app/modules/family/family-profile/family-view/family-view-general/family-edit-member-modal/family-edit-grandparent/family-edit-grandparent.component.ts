import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FamilyPerson} from "../../../../../../../models/family/family-person.model";
import {FamilyRoles} from "../../../../../../../enums/family-roles";
import {Gender} from "../../../../../../../enums/gender";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FamilyPersonService} from "../../../../../../../services/family/family-person.service";
import {NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";
import {environment} from "../../../../../../../../environments/environment";

@Component({
  selector: 'app-family-edit-grandparent',
  templateUrl: './family-edit-grandparent.component.html',
  styleUrls: ['./family-edit-grandparent.component.css']
})
export class FamilyEditGrandparentComponent implements OnInit {
  @Output() closeModalEditFamilyMember: EventEmitter<any> = new EventEmitter<any>();
  @Input() familyPerson: FamilyPerson;

  familyRoles = FamilyRoles;
  gender = Gender;
  avatar: string | ArrayBuffer;
  date = new Date();

  get minDate() {
    return {day: 1, month: 1, year: this.date.getFullYear() - 100};
  }

  get maxDate() {
    return {day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear()};
  }

  get getAvatarUrl() {
    return environment.avatarUrl + this.familyPerson.person.avatar;
  }

  familyGrandParentForm: FormGroup;

  constructor(private familyPersonService: FamilyPersonService,
              private fb: FormBuilder,
              private parserFormatter: NgbDateParserFormatter) {
  }

  ngOnInit() {
    this.initFamilyNewPersonForm();
  }

  initFamilyNewPersonForm() {
    this.familyGrandParentForm = this.fb.group({
      first_name: [this.familyPerson.person.first_name, Validators.required],
      middle_name: [this.familyPerson.person.middle_name],
      last_name: [this.familyPerson.person.last_name],
      country: [this.familyPerson.person.country],
      state: [this.familyPerson.person.state],
      city: [this.familyPerson.person.city],
      address: [this.familyPerson.person.address],
      zip: [this.familyPerson.person.zip],
      contact_phone: [this.familyPerson.person.contact_phone],
      contact_email: [this.familyPerson.person.contact_email],
      deceased: [this.familyPerson.person.deceased || 0],
      dod: [this.parserFormatter.parse(this.familyPerson.person.dod) || null]
    });
  }

  updateFamilyParent() {
    if (this.familyGrandParentForm.invalid) return;
    let data = {
      person: {
        ...this.familyGrandParentForm.value,
        deceased: this.familyGrandParentForm.value.deceased ? 1 : 0,
        dod: this.parserFormatter.format(this.familyGrandParentForm.value.dod) || null,
        avatar: this.avatar || null,
      },
    };
    this.familyPersonService.update(data, this.familyPerson.id);
    this.onCloseEditFamilyMemberModal();
  }

  onCloseEditFamilyMemberModal() {
    this.closeModalEditFamilyMember.emit(true);
  }

  onChangeAvatar($event) {
    this.avatar = $event;
  }
}
