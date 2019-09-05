import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FieldService } from '@core/field.service';
import fields from '@app/shared/fields';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  form: FormGroup;

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

  buttons = [
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
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      short: new FormControl('short text', Validators.required),
      toggle: new FormControl(true),
      checkbox: new FormControl(true),
      buttonGroup: new FormControl('upload-value'),
      dropdown: new FormControl([]),
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(`Value changed`, value);
    });
  }

}
