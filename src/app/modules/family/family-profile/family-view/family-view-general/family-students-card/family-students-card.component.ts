import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-students-card',
  templateUrl: './family-students-card.component.html',
  styleUrls: ['./family-students-card.component.css']
})
export class FamilyStudentsCardComponent implements OnInit {

  activeTab: string = 'education';

  constructor() { }

  ngOnInit() {
  }

}
