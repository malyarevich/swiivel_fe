import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Family} from "../../../../../../../models/family/family.model";
import {FamilyRoles, familyRoles} from "../../../../../../../enums/family-roles";

@Component({
  selector: 'app-family-add-new-person',
  templateUrl: './family-add-new-person.component.html',
  styleUrls: ['./family-add-new-person.component.css']
})
export class FamilyAddNewPersonComponent implements OnInit {
  @Output() closeModalAddFamilyMember: EventEmitter<any> = new EventEmitter<any>();
  @Input() family: Family;

  roles = familyRoles;
  FAMILY_ROLES = FamilyRoles;
  role: string = this.FAMILY_ROLES.father;

  constructor() {
  }

  ngOnInit() {
  }

  onCloseAddFamilyMemberModal() {
    this.closeModalAddFamilyMember.emit(true);
  }
}
