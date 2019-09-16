import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sw-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class SidebarConsentComponent implements OnInit {
  
  form: FormGroup;
  isOpenItems: boolean[] = [];
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
      items: new FormArray([])
    });
  }

  ngOnInit() {
    this.addItem();
    this.addItem();
  }

  get items(): FormArray {
    console.log(this.form.get('items') as FormArray)
    return this.form.get('items') as FormArray;
  }

  addItem(): void {
    this.isOpenItems.push(true);
    this.items.push(
      new FormGroup({
        name: new FormControl('', { updateOn: 'blur' }),
        checkbox: new FormControl(false),
        button: new FormControl(false),
        requireSignature: new FormControl(false),
        signature: new FormControl([])
      })
    );
  }

  removeItem(index: number) {
    if (index >= 0) {
      this.items.removeAt(index);
      this.isOpenItems.splice(index, 1);
    }
  }

  openItem(index: number) {
    if (index >= 0) this.isOpenItems[index] = true;
  }

  hideItem(index: number) {
    if (index >= 0) this.isOpenItems[index] = false;
  }

}
