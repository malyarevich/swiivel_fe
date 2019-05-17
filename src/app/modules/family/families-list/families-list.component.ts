import { Component, OnInit } from '@angular/core';
import {FamilyService} from "../services/family.service";
import {Observable} from "rxjs";
import {Family} from "../model/family.model";

@Component({
  selector: 'app-families-list',
  templateUrl: './families-list.component.html',
  styleUrls: ['./families-list.component.css']
})
export class FamiliesListComponent implements OnInit {

  public familyList: Observable <Family[]> ;

  constructor(private familyService: FamilyService) { }

  ngOnInit() {
    this.getFamilyList();
  }

  getFamilyList() {
    this.familyList = this.familyService.familyList;
    this.familyService.getAll();
  }

  deleteFamily(familyId) {
    this.familyService.delete(familyId);
  }

}
