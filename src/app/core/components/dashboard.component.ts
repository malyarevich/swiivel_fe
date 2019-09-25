import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import fields from '@app/shared/fields';
import { FieldService } from '@core/field.service';
import * as vs from '@core/validators';

import { numericValidator } from '@core/validators';
const TEST_FIELD_SERVICE = false;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  textarea = {
    rows: undefined,
    cols: undefined,
    editable: true
  };
  longTextDisabled = new FormControl(false);
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

  fileOptions = {
    acceptedFormats: ['.jpg', '.svg', '.pdf']
  };

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
      phone: new FormControl('', vs.phoneNumberValidator()),
      email: new FormControl('', vs.emailValidator()),
      longText: new FormControl('Long text\n wrew', Validators.required),
      file: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    if (TEST_FIELD_SERVICE) {
      this.fields = this.fs.fromArray(fields);
      const dform = this.fb.array(this.fields.map(field => field.control));
      dform.valueChanges.subscribe((value) => {
        console.log(`Dynamic form fields value changed`, value);
      });
    }
    this.longTextDisabled.valueChanges.subscribe((isDisabled) => {
      if (!!isDisabled) {
        this.form.get('longText').disable();
      } else {
        this.form.get('longText').enable();
      }
    });
    this.form.valueChanges.subscribe((value) => {
      console.log('Phone input', this.form.get('phone').valid);
      console.log(`Value changed`, value);
    });
  }

  changeTextarea(size = false) {
    if (size) {
      this.textarea.rows = 10;
      this.textarea.cols = 50;
    } else {
      this.form.get('longText').setValue('Changed long text\nmultiline');
    }
  }

}
