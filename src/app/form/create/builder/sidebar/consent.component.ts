import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SIGNATURE_TYPES, E_SIGNATURE_TYPES } from '@app/enums/signature-type';

@Component({
  selector: 'sw-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class SidebarConsentComponent implements OnInit {
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
        sectionName: ["Consent Section"],
        sectionWidth: ["full"],
        consents: [[]]
      }));
    }
    this.lform = _form.get('consentInfo');
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.lform = this.fb.group({
      sectionName: ["Consent Section"],
      sectionWidth: ["full"],
      consents: [[]]
    });
  }

  ngOnInit() {
  }

  addConsentItem(): void {
    let tmp = this.lform.get('consents').value ? this.lform.get('consents').value : [];
    let newItem = {
      title: '',
      id: '',
      text: {
        value: '',
      },
      checkbox: {
        isActive: false,
        checked: false,
        text: '',
      },
      button: {
        isActive: false,
        text: ''
      },
      signature: {
        isRequire: false,
        type: SIGNATURE_TYPES.WET,
        eType: E_SIGNATURE_TYPES.EXTERNAL,
        isBothParents: false,
        signed: { parents: false, fathers: false, mothers: false }
      }
    }
    tmp.push(newItem);
    this.lform.get('consents').patchValue(tmp);
  }

  removeItem(index: number) {
    if (index >= 0) {
     let tmp = this.lform.get('consents').value
     tmp.splice(index, 1);
     this.lform.get('consents').patchValue(tmp);
    }
  }

  openItem(index: number) {
    if (index >= 0) { this.isOpenItems[index] = true; }
  }

  hideItem(index: number) {
    if (index >= 0) { this.isOpenItems[index] = false; }
  }

}
