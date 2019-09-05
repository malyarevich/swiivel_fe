import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FieldService } from '@core/field.service';
import fields from '@app/shared/fields';

import { numericValidator } from '@core/validators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  form: FormGroup;

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

  numberOptions = {
    type: 'decimal',
    places: 3
  };

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      short: new FormControl('short text', Validators.required),
      toggle: new FormControl(true),
      checkbox: new FormControl(true),
      buttonGroup: new FormControl('upload-value'),
      number: new FormControl(123456)
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(`Value changed`, value);
    });
  }

}
