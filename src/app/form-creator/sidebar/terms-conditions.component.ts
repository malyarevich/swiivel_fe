import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class SidebarTermsConditionsComponent implements OnInit {

  form: FormGroup;
  buttonOptions = [
    {
      label: 'Any Parent',
      value: 'any'
    },
    {
      label: 'Both Parents',
      value: 'both'
    }
  ];

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      signature: new FormControl(''),
      items: new FormArray([])
    });
  }

  ngOnInit() {
    this.addItem();
    this.addItem();
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  addItem(): void {
    this.items.push(
      new FormGroup({
        name: new FormControl('', { updateOn: 'blur' }),
        checkbox: new FormControl(false),
      })
    );
  }

  removeItem(index: number) {
    if (index >= 0) {
      this.items.removeAt(index);
    }
  }

}
