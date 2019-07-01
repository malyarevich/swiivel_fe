import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-family-profile',
  templateUrl: './family-profile.component.html',
  styleUrls: ['./family-profile.component.css']
})
export class FamilyProfileComponent implements OnInit {

  familyId: string;

  constructor(private route: ActivatedRoute) {
    this.getFamilyId();
  }

  ngOnInit() {

  }

  getFamilyId() {
    this.familyId = this.route.snapshot.paramMap.get('id');
  }
}
