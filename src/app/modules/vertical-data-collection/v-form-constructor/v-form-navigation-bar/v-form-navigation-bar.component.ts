import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralInfoIsValidService} from "../../services/general-info-is-valid.service";
import { SaveFormService } from '../../services/save-form.service';

@Component({
  selector: 'app-v-form-navigation-bar',
  templateUrl: './v-form-navigation-bar.component.html',
  styleUrls: ['./v-form-navigation-bar.component.scss']
})
export class VFormNavigationBarComponent implements OnInit {
  
  isGeneralSaved: boolean = false;
  isBuilderSaved: boolean = false;
  isPublishSaved: boolean = false;

  isGeneralInfoValid: boolean;

  constructor(
    private router: Router,    
    private generalInfoIsValidService: GeneralInfoIsValidService,
    private saveFormService: SaveFormService
    ) {
    this.generalInfoIsValidService.onIsValid.subscribe(val => this.isGeneralInfoValid = val)
  }

  ngOnInit() {
  }

  eventGeneral($event) {
    this.isGeneralSaved = $event;
    this.goBack();
  }
  eventBuilder($event) {
    this.isBuilderSaved = $event;
    this.goBack();
  }
  eventPublish($event) {
    this.isPublishSaved = $event;
    this.goBack();
  }

  goBack() {
    console.log("goBack");
    if (this.isGeneralSaved && this.isBuilderSaved && this.isPublishSaved) {
      this.router.navigate([`/vertical-data-collection/`]);
    }
  }

  saveForm() {
    this.saveFormService.onSaveForm.emit();
  }
}
