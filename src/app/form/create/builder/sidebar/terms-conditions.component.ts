import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class SidebarTermsConditionsComponent implements OnInit {

  lform: FormGroup;
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
    if (!_form.get('termsConditions')) {
      _form.addControl('termsConditions', this.fb.group({
        sectionName: ["Terms and Conditions"],
        sectionWidth: ["full"],
        siganature: this.fb.group({
          eType: ["system"],
          isBothParents: [false],
          isRequire: [true],
          signed: {parents: false, fathers: false, mothers: false},
          type: "esign",
        }),
        termsConditionsItems: [[]]
      }));
    }
    this.lform = _form.get('termsConditions');
    // this.cdr.markForCheck();
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.lform = this.fb.group({
      signature: this.fb.group({
        eType: ["system"],
        isBothParents: [false],
        isRequire: [true],
        signed: {parents: false, fathers: false, mothers: false},
        type: "esign",
      }),
      items: new FormArray([])
    });
  }

  ngOnInit() {
  }

  removeItem(index: number) {
    if (index >= 0) {
      let tmp = this.lform.get('termsConditionsItems').value;
      tmp.splice(index, 1);
      this.lform.get('termsConditionsItems').patchValue(tmp);
    }
  }

}
