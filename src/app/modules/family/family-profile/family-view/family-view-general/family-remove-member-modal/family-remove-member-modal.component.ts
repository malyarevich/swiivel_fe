import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {FamilyPersonService} from "../../../../../../services/family/family-person.service";
import {FamilyQueryParamsService} from "../../../../../../services/family/family-query-params.service";
import {FAMILY_VIEW_GENERAL_TABS} from "../../../../../../models/family/family-view-general-tabs";

@Component({
  selector: 'app-family-remove-member-modal',
  templateUrl: './family-remove-member-modal.component.html',
  styleUrls: ['./family-remove-member-modal.component.css']
})
export class FamilyRemoveMemberModalComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;
  @Output() closeModalRemoveFamilyMember: EventEmitter<any> = new EventEmitter<any>();

  FAMILY_VIEW_GENERAL_TABS = FAMILY_VIEW_GENERAL_TABS;

  constructor(private familyPersonService: FamilyPersonService,
              private familyQueryParamsService: FamilyQueryParamsService) {
  }

  ngOnInit() {
  }

  onCloseRemoveFamilyMemberModal() {
    this.closeModalRemoveFamilyMember.emit(true);
  }

  delete() {
    this.familyPersonService.delete(this.familyPerson.id, this.familyPerson.person_role);
    this.onCloseRemoveFamilyMemberModal();
  }

}
