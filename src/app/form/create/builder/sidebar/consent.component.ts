import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from '@app/enums/signature-type';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'sw-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class SidebarConsentComponent {
  lform: FormGroup;
  isOpenItems: boolean[] = [];
  buttonOptions = [
    {
      label: 'Any Parent',
      value: false
    },
    {
      label: 'Both Parents',
      value: true
    }
  ];

  @Input()
  set form(_form: any) {
    if (!_form.get('consentInfo')) {
      _form.addControl('consentInfo', this.fb.group({
        sectionName: ['Consent Section'],
        sectionWidth: ['full'],
        consents: this.fb.array([])
      }));
    }
    this.lform = _form.get('consentInfo');
  }

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.lform = this.fb.group({
      sectionName: ['Consent Section'],
      sectionWidth: ['full'],
      consents: this.fb.array([])
    });

  }

  isRequireSignature(item) {
    if (item && item.value) {
      return item.value.signature.isRequire;
    }
  }

  get consents() {
    return this.lform.get('consents') as FormArray;
  }

  addConsentItem(): void {
    const newItem = this.fb.group({
      title: [''],
      id: [uuid()],
      text: this.fb.group({
        value: [''],
      }),
      checkbox: this.fb.group({
        isActive: [false],
        checked: [false],
        text: [''],
      }),
      button: this.fb.group({
        isActive: [false],
        text: ['Accept']
      }),
      signature: this.fb.group({
        isRequire: [false],
        type: [SIGNATURE_TYPES.WET],
        eType: [E_SIGNATURE_TYPES.EXTERNAL],
        isBothParents: [false],
        signed: this.fb.group({ parents: [false], fathers: [false], mothers: [false] })
      })
    });
    this.isOpenItems.push(true);
    (this.lform.get('consents') as FormArray).push(newItem);
  }

  removeItem(index: number) {
    if (index >= 0) {
     this.consents.removeAt(index);
    }
  }

  openItem(index: number) {
    if (index >= 0) { this.isOpenItems[index] = true; }
  }

  hideItem(index: number) {
    if (index >= 0) { this.isOpenItems[index] = false; }
  }

}
