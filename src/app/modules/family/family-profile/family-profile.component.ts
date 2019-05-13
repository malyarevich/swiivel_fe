import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-family-profile',
  templateUrl: './family-profile.component.html',
  styleUrls: ['./family-profile.component.css']
})
export class FamilyProfileComponent implements OnInit {

  familyId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFamilyId();
    this.getFamilyInfo()
  }

  getFamilyId() {
    this.route.params.subscribe((params) => {
      this.familyId = params['id'];
    });
  }

  getFamilyInfo() {

  }

}
