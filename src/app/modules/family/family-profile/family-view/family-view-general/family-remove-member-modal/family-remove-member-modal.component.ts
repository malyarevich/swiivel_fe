import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {FamilyPersonService} from "../../../../../../services/family/family-person.service";

@Component({
  selector: 'app-family-remove-member-modal',
  templateUrl: './family-remove-member-modal.component.html',
  styleUrls: ['./family-remove-member-modal.component.css']
})
export class FamilyRemoveMemberModalComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;
  @Output() closeModalRemoveFamilyMember: EventEmitter<any> = new EventEmitter<any>();

  constructor(private familyPersonService: FamilyPersonService) { }

  ngOnInit() {
  }

  onCloseRemoveFamilyMemberModal() {
    this.familyPersonService.delete(this.familyPerson.id, this.familyPerson.person_role);
    this.closeModalRemoveFamilyMember.emit(true);
  }

  delete() {

    this.onCloseRemoveFamilyMemberModal();
  }

}
