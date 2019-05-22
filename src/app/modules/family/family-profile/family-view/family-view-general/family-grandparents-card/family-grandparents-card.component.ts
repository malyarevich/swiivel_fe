import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";

@Component({
  selector: 'app-family-grandparents-card',
  templateUrl: './family-grandparents-card.component.html',
  styleUrls: ['./family-grandparents-card.component.css']
})
export class FamilyGrandparentsCardComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;

  constructor() { }

  ngOnInit() {
  }

}
