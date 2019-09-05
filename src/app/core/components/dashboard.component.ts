import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldService } from '@core/field.service';
import fields from '@app/shared/fields';
import * as vs from '@core/validators';

import { numericValidator } from '@core/validators';
const TEST_FIELD_SERVICE = false;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  form: FormGroup;
  fields;

  dropdownList = [
    {
      id: 1, title: 'Test 1'
    },
    {
      id: 2, title: 'Test 2'
    },
    {
      id: 3, title: 'Test 3'
    },
    {
      id: 4, title: 'Test 4'
    },
    {
      id: 5, title: 'Test 5'
    },
    {
      id: 6, title: 'Test 6'
    }
  ];

  buttonsOptions = [
    {
      label: 'Upload',
      value: 'upload-value'
    },
    {
      label: 'Download',
      value: 'download-value'
    },
    {
      label: 'Delete',
      value: 'delete-value'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private fs: FieldService
  ) {
    this.form = this.fb.group({
      short: new FormControl('short text', Validators.required),
      toggle: new FormControl(true),
      checkbox: new FormControl(true),
      buttonGroup: new FormControl('upload-value'),
      dropdown: new FormControl([]),
      number: new FormControl(123456, Validators.required),
      phone: new FormControl('', vs.phoneNumberValidator()),
      email: new FormControl('', vs.emailValidator()),
    });
  }

  ngOnInit() {
    if (TEST_FIELD_SERVICE) {
      this.fields = this.fs.fromArray(fields);
      let dform = this.fb.array(this.fields.map(field => field.control));
      dform.valueChanges.subscribe((value) => {
        console.log(`Dynamic form fields value changed`, value)
      });
    }
    this.form.valueChanges.subscribe((value) => {
      console.log('Phone input', this.form.get('phone').valid);
      console.log(`Value changed`, value);
    });
  }
}
