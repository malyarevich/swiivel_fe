import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-profile-info',
  templateUrl: './family-profile-info.component.html',
  styleUrls: ['./family-profile-info.component.css']
})
export class FamilyProfileInfoComponent implements OnInit {

  isEditProfile: boolean = false;
  isEditFamilyName: boolean = false;

  tempFamily = {
    name: 'Fishman Family',
    homeAddress: '',
  };

  constructor() { }

  ngOnInit() {
  }

  save() {
    // console.log('save');
  }
}
