import { Component, OnInit } from '@angular/core';
import {FamilyService as FamilyService2} from "../../services/family.service";
import {cloneDeep} from 'lodash';
import {Family} from "../../model/family.model";

@Component({
  selector: 'app-family-profile-info',
  templateUrl: './family-profile-info.component.html',
  styleUrls: ['./family-profile-info.component.css']
})
export class FamilyProfileInfoComponent implements OnInit {

  isEditProfile: boolean = false;
  isEditFamilyName: boolean = false;

  familyEditable: Family;

  constructor(private familyService: FamilyService2) { }

  ngOnInit() {
  }

  save() {
    // console.log('save');
  }

  onEdit() {
    this.isEditProfile = true;
    this.familyEditable = cloneDeep(this.familyService.tempFamily);
  }

  cancelEdit() {
    this.isEditProfile = false;
    this.familyEditable = null;
  }
}
