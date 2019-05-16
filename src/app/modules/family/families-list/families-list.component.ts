import { Component, OnInit } from '@angular/core';
import {FamilyService} from "../../../services/family/family.service";
import {FamilyService as FamilyService2} from "../services/family.service";
import {FamilyPerson} from "../../../models/family-person.model";
import {Observable} from "rxjs";
import {Family} from "../model/family.model";

@Component({
  selector: 'app-families-list',
  templateUrl: './families-list.component.html',
  styleUrls: ['./families-list.component.css']
})
export class FamiliesListComponent implements OnInit {

  familyPersons: FamilyPerson[] = [];

  public familyList: Observable < Family[] > ;

  constructor(private familyService: FamilyService,
              private familyService2: FamilyService2) { }

  ngOnInit() {
    this.getFamilyPersons();
    this.getFamilyList();
  }

  getFamilyPersons() {
    this.familyService.getAllFamilyPersons().subscribe((res: FamilyPerson[]) => {
      this.familyPersons = res;
    })
  }

  getFamilyList() {
    this.familyList = this.familyService2.familyList;
    this.familyService2.getAll();
  }

}
