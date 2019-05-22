import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FamilyService} from "../../services/family.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-family-create-modal',
  templateUrl: './family-create-modal.component.html',
  styleUrls: ['./family-create-modal.component.css'],
})
export class FamilyCreateModalComponent implements OnInit {
  @Output() closeFamilyModal: EventEmitter<any> = new EventEmitter<any>();

  familyName: string;

  constructor(
    private familyService: FamilyService,
    private router: Router) {
  }

  ngOnInit() {
  }

  save() {
    this.familyService.add(this.familyName);
    this.onCloseFamilyModal()
    // this.router.navigate([`/family/profile/${this.family._id}`]);
  }

  onCloseFamilyModal() {
    this.closeFamilyModal.emit(true);
  }
}
