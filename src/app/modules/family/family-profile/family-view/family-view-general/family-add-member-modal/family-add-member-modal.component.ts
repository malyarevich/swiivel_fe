import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FamilyService} from "../../../../../../services/family/family.service";
import {Family} from "../../../../../../models/family/family.model";

@Component({
  selector: 'app-family-add-member-modal',
  templateUrl: './family-add-member-modal.component.html',
  styleUrls: ['./family-add-member-modal.component.css']
})
export class FamilyAddMemberModalComponent implements OnInit {
  @Output() closeModalAddFamilyMember: EventEmitter<any> = new EventEmitter<any>();

  activeTab: 'exist' | 'new' = 'exist';
  family: Family;

  constructor(private familyService: FamilyService) {
  }

  ngOnInit() {
    this.getFamily();
  }

  getFamily() {
    this.familyService.family.subscribe((res) => {
      this.family = res;
    });
  }

  onCloseAddFamilyMemberModal() {
    this.closeModalAddFamilyMember.emit(true);
  }

  setActiveTab(tab) {
    this.activeTab = tab;
  }
}
