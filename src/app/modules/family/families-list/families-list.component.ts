import { Component, OnInit } from '@angular/core';
import {FamilyService} from "../../../services/family/family.service";
import {FamilyPerson} from "../../../models/family-person.model";

@Component({
  selector: 'app-families-list',
  templateUrl: './families-list.component.html',
  styleUrls: ['./families-list.component.css']
})
export class FamiliesListComponent implements OnInit {

  familyPersons: FamilyPerson[] = [];

  constructor(private familyService: FamilyService) { }

  ngOnInit() {
    this.getFamilyPersons();
  }

  getFamilyPersons() {
    this.familyService.getAllFamilyPersons().subscribe((res: FamilyPerson[]) => {
      this.familyPersons = res;
    })
  }

}
