import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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
        signature: this.fb.group({
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
    console.log('SIDEBAR TERMSCONDITION INPUT', this.lform);
    this.cdr.markForCheck();
  }

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.lform = this.fb.group({
      sectionName: ["Terms and Conditions"],
      sectionWidth: ["full"],
      signature: this.fb.group({
        eType: ["system"],
        isBothParents: [false],
        isRequire: [true],
        signed: {parents: false, fathers: false, mothers: false},
        type: "esign",
      }),
      termsConditionsItems: [[]]
    });
    console.log('SIDEBAR TERMSCONDITION', this.lform);
    this.cdr.markForCheck();
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
