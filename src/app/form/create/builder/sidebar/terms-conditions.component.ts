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
          type: "wet",
        }),
        termsConditionsItems: this.fb.array([])
      }));
    }
    this.lform = _form.get('termsConditions');
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
        type: "wet",
      }),
      termsConditionsItems: this.fb.array([])
    });
    this.cdr.markForCheck();
  }

  ngOnInit() {
  }

  removeItem(index: number) {
    if (index >= 0) {
      (this.lform.get('termsConditionsItems') as FormArray).removeAt(index);
    }
  }

}
