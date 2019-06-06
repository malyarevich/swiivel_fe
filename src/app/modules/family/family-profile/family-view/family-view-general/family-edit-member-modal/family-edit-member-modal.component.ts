import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {FamilyRoles} from "../../../../../../enums/family-roles";

@Component({
  selector: 'app-family-edit-member-modal',
  templateUrl: './family-edit-member-modal.component.html',
  styleUrls: ['./family-edit-member-modal.component.css']
})
export class FamilyEditMemberModalComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;
  @Output() closeModalEditFamilyMember: EventEmitter<any> = new EventEmitter<any>();

  FAMILY_ROLES = FamilyRoles;

  constructor() { }

  ngOnInit() {
  }

  onCloseEditFamilyMemberModal() {
    this.closeModalEditFamilyMember.emit(true)
  }
}
