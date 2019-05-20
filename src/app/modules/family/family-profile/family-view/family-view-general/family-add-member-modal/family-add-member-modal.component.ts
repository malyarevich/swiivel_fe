import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-family-add-member-modal',
  templateUrl: './family-add-member-modal.component.html',
  styleUrls: ['./family-add-member-modal.component.css']
})
export class FamilyAddMemberModalComponent implements OnInit {
  @Output() closeModalAddFamilyMember: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onCloseAddFamilyMemberModal() {
    this.closeModalAddFamilyMember.emit(true);
  }

}
