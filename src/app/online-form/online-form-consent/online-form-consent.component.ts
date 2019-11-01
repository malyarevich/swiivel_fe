import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from '@models/data-collection/form.model';
import { cloneDeep } from 'lodash';
import { ICurrentPosition, IFormNavigationState } from '../models/online-form.model';

@Component({
  selector: 'sw-online-form-consent',
  templateUrl: './online-form-consent.component.html',
  styleUrls: ['./online-form-consent.component.scss']
})
export class OnlineFormConsentComponent implements OnInit {
  @Input() form: FormModel;
  @Input() formNavigationState: IFormNavigationState[];
  @Input() currentPosition: ICurrentPosition;
  @Input() formErrors: object;
  @Input() fg: FormGroup;

  consents: any[];

  constructor() {}

  ngOnInit() {
    this.initConsents();
  }

  initConsents() {
    this.consents = cloneDeep(this.form.consentInfo.consents).map(item => {
      return { ...item, _id: item.id, name: item.title };
    });
  }

  isExist(): boolean {
    return typeof this.form.consentInfo !== 'undefined' && this.form.consentInfo.consents.length > 0;
  }

  isShowConsent(consentIndex: number): boolean {
    return this.currentPosition.tab === consentIndex;
  }

}
