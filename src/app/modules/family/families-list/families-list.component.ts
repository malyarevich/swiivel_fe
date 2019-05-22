import { Component, OnInit } from '@angular/core';
import {FamilyService} from "../services/family.service";
import {Observable} from "rxjs";
import {Family} from "../../../models/family/family.model";

@Component({
  selector: 'app-families-list',
  templateUrl: './families-list.component.html',
  styleUrls: ['./families-list.component.css']
})
export class FamiliesListComponent implements OnInit {

  showModal: boolean = false;
  public familyList$: Observable <Family[]> ;
  public loader$: Observable <boolean>;

  constructor(private familyService: FamilyService) { }

  ngOnInit() {
    this.loader$ = this.familyService.loading;
    this.getFamilyList();
  }

  getFamilyList() {
    this.familyList$ = this.familyService.familyList;
    this.familyService.getAll();
  }

  deleteFamily(familyId) {
    this.familyService.delete(familyId);
  }

  showFamilyAddModal() {
    this.showModal = true;
  }

  onCloseFamilyAddModal() {
    this.showModal = false;
  }

}
