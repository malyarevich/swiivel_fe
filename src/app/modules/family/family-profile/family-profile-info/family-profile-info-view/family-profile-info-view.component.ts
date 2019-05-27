import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Family} from "../../../../../models/family/family.model";
import {HelperFamilyService} from "../../../../../services/family/helper-family.service";

@Component({
  selector: 'app-family-profile-info-view',
  templateUrl: './family-profile-info-view.component.html',
  styleUrls: ['./family-profile-info-view.component.css']
})
export class FamilyProfileInfoViewComponent implements OnInit {
  @Input() family: Family;
  @Output() isEditEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  get fullFamilyAddress() {
    return this.helperFamilyService.getFullFamilyAddress(this.family);
  }

  constructor(private helperFamilyService: HelperFamilyService) { }

  ngOnInit() {
  }

  onEdit() {
    this.isEditEmitter.emit(true);
  }

}
