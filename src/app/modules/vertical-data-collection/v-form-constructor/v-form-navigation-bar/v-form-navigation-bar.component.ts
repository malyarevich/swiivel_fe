import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GeneralInfoIsValidService} from "../../services/general-info-is-valid.service";

@Component({
  selector: 'app-v-form-navigation-bar',
  templateUrl: './v-form-navigation-bar.component.html',
  styleUrls: ['./v-form-navigation-bar.component.scss']
})
export class VFormNavigationBarComponent implements OnInit {

  isGeneralInfoValid: boolean;

  constructor(private generalInfoIsValidService: GeneralInfoIsValidService) {
    this.generalInfoIsValidService.onIsValid.subscribe(val => this.isGeneralInfoValid = val)
  }

  ngOnInit() {
  }

}
