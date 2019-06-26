import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../models/family/family-person.model";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-family-person-container',
  templateUrl: './family-person-container.component.html',
  styleUrls: ['./family-person-container.component.css']
})
export class FamilyPersonContainerComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;
  avatarUrl = environment.avatarUrl;

  constructor() { }

  ngOnInit() {
  }

}
