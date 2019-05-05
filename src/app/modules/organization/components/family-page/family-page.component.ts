import { Component, OnInit } from '@angular/core';
import {FamilyService} from "../../../../services/family/family.service";

interface FamilyPerson {
  id: number,
  family_id: string,
  family_name: string,
  id_person: number,
  person_role: string,
  role_state: number,
  person: object,
}

@Component({
  selector: 'app-family-page',
  templateUrl: './family-page.component.html',
  styleUrls: ['./family-page.component.css']
})
export class FamilyPageComponent implements OnInit {

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
