import {Component, Input, OnInit} from '@angular/core';
import {cloneDeep} from 'lodash';
import {Family} from "../../../../models/family/family.model";
import {Observable} from "rxjs";
import {LoaderService} from "../../../../services/loader/loader.service";
import {FamilyService} from "../../../../services/family/family.service";
import {HelperFamilyService} from "../../../../services/family/helper-family.service";

@Component({
  selector: 'app-family-profile-info',
  templateUrl: './family-profile-info.component.html',
  styleUrls: ['./family-profile-info.component.css'],
})
export class FamilyProfileInfoComponent implements OnInit {
  @Input() familyId;

  isEditProfile: boolean = false;
  isEditFamilyName: boolean = false;

  loader$: Observable <boolean>;
  family: Family;
  familyEditable: Family;

  get fullFamilyAddress() {
    return this.helperFamilyService.getFullFamilyAddress(this.family);
  }

  constructor(private familyService: FamilyService,
              private loaderService: LoaderService,
              private helperFamilyService: HelperFamilyService) { }

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
