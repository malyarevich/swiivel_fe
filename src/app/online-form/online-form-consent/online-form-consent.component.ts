import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Form } from '@app/models/data-collection/form';
import { cloneDeep } from 'lodash';
import {
  IMainMenuNames,
  IMenuItems,
  mainMenuNames,
  menuItems
} from '../models/menu.model';

@Component({
  selector: 'sw-online-form-consent',
  templateUrl: './online-form-consent.component.html',
  styleUrls: ['./online-form-consent.component.scss']
})
export class OnlineFormConsentComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: any;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  consents: any[];

  sections: object[];
  activeSectionId: string;

  constructor() {}

  ngOnInit() {
    this.initConsents();
  }

  initConsents() {
    this.consents = cloneDeep(this.form.consentInfo.consents).map(item => {
      return { ...item, _id: item.id, name: item.title };
    });
  }

  isShowConsent(consentIndex: number): boolean {
    return this.currentPosition.tab === consentIndex;
  }

}
