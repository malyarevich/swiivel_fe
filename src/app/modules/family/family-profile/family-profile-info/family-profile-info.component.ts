import {Component, Input, OnInit} from '@angular/core';
import {cloneDeep} from 'lodash';
import {Family} from "../../../../models/family/family.model";
import {Observable} from "rxjs";
import {LoaderService} from "../../../../services/loader/loader.service";
import {FamilyService} from "../../services/family.service";

@Component({
  selector: 'app-family-profile-info',
  templateUrl: './family-profile-info.component.html',
  styleUrls: ['./family-profile-info.component.css']
})
export class FamilyProfileInfoComponent implements OnInit {
  @Input() familyId;

  isEditProfile: boolean = false;
  isEditFamilyName: boolean = false;

  loader$: Observable <boolean>;
  family: Family;
  familyEditable: Family;

  get fullFamilyAddress() {
    let fullAddress = '';
    fullAddress += this.family.family_info.address ? this.family.family_info.address : '';
    fullAddress += this.family.family_info.state ? ', ' + this.family.family_info.state : '';
    fullAddress += this.family.family_info.city ? ', ' + this.family.family_info.city : '';
    fullAddress += this.family.family_info.zip ? ', ' + this.family.family_info.zip : '';
    return fullAddress;
  }

  constructor(private familyService: FamilyService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.loader$ = this.loaderService.loader;
    this.getFamily(this.familyId);
  }

  getFamily(familyId) {
    this.familyService.family.subscribe((res) => {
      this.family = res;
    });
    this.familyService.getOne(familyId);
  }

  update() {
    this.isEditProfile = false;
    this.familyService.update(this.familyEditable)
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
