import {Component, Input, OnInit} from '@angular/core';
import {Family} from "../../../../models/family/family.model";
import {Observable} from "rxjs";
import {LoaderService} from "../../../../services/loader/loader.service";
import {FamilyService} from "../../../../services/family/family.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FamilyPersonService} from "../../../../services/family/family-person.service";
import {Person} from "../../../../models/person.model";

@Component({
  selector: 'app-family-profile-info',
  templateUrl: './family-profile-info.component.html',
  styleUrls: ['./family-profile-info.component.css'],
})
export class FamilyProfileInfoComponent implements OnInit {
  @Input() familyId;

  isEditProfile: boolean = false;
  isEditFamilyName: boolean = false;

  familyForm: FormGroup;
  loader$: Observable<boolean>;
  family: Family;
  preferredContacts = [];

  language = ['english', 'hebrew'];
  contactMethod = ['email', 'cell phone'];

  constructor(private familyService: FamilyService,
              private loaderService: LoaderService,
              private formBuilder: FormBuilder,
              private familyPersonService: FamilyPersonService) {
  }

  ngOnInit() {
    this.loader$ = this.loaderService.loader;
    this.familyForm = this.formBuilder.group({
      name: ['', Validators.required],
      preferred_contact: [null],
      preferred_contact_method: [null],
      home_phone_number: [null],
      address: [null],
      city: [null],
      state: [null],
      zip: [null],
      language_spoken_at_home: [null],
      family_rabbi: [null],
      rabbi_phone_number: [null],
      family_shul: [null],
    });

    this.getFamily(this.familyId);
    this.getPreferredContacts();
  }

  getFamily(familyId) {
    this.familyService.family.subscribe((family) => {
      this.family = {...family};
      let familyInfo = {...this.family.family_info};
      this.familyForm.patchValue({
        name: family.name,
        ...familyInfo,
      });
    });
    this.familyService.getOne(familyId);
  }

  getPreferredContacts() {
    this.familyPersonService.familyPersonList.subscribe((res) => {
      res.map((item) => {
        this.preferredContacts.push(item.person.first_name + (item.person.last_name ? ' ' + item.person.last_name : ''));
      });
    });
  }

  submit() {
    if (this.familyForm.valid) {
      this.isEditProfile = false;
      this.familyService.update({
        family_id: this.familyId,
        name: this.familyForm.value.name,
        family_info: {
          preferred_contact: this.familyForm.value.preferred_contact,
          preferred_contact_method: this.familyForm.value.preferred_contact_method,
          home_phone_number: this.familyForm.value.home_phone_number,
          address: this.familyForm.value.address,
          city: this.familyForm.value.city,
          state: this.familyForm.value.state,
          zip: this.familyForm.value.zip,
          language_spoken_at_home: this.familyForm.value.language_spoken_at_home,
          family_rabbi: this.familyForm.value.family_rabbi,
          rabbi_phone_number: this.familyForm.value.rabbi_phone_number,
          family_shul: this.familyForm.value.family_shul,
        },
      })
    }
  }

  onEdit(value) {
    this.isEditProfile = value;
  }
}
