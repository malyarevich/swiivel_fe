import {Component, Input, OnInit} from '@angular/core';
import {FamilyService as FamilyService2} from "../../services/family.service";
import {cloneDeep} from 'lodash';
import {Family} from "../../model/family.model";

@Component({
  selector: 'app-family-profile-info',
  templateUrl: './family-profile-info.component.html',
  styleUrls: ['./family-profile-info.component.css']
})
export class FamilyProfileInfoComponent implements OnInit {
  @Input() familyId;

  isEditProfile: boolean = false;
  isEditFamilyName: boolean = false;

  family: Family;
  familyEditable: Family;

  constructor(private familyService2: FamilyService2) { }

  ngOnInit() {
    this.getFamily(this.familyId);
  }

  getFamily(id) {
    this.familyService2.family.subscribe((res) => {
      this.family = res;
    });
    this.familyService2.getOne(id);
  }

  update() {
    // console.log('save');
  }

  onEdit() {
    this.isEditProfile = true;
    this.familyEditable = cloneDeep(this.family);
  }

  cancelEdit() {
    this.isEditProfile = false;
    this.familyEditable = null;
  }
}
