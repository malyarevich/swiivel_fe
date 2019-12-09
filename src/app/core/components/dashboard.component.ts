import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  uploadStatus = 'No file selected';

  constructor(
    private fb: FormBuilder,
    private fs: FieldService
  ) {
    this.form = this.fb.group({
      short: new FormControl('short text', Validators.required),
      disabled_short: this.fb.control('disabled text'),
      toggle: new FormControl(true),
      checkbox: new FormControl(true),
      buttonGroup: new FormControl('upload-value'),
      dropdown: new FormControl([]),
      phone: new FormControl('', vs.phoneNumberValidator()),
      email: new FormControl('', vs.emailValidator()),
      longText: new FormControl('Long text\n wrew', Validators.required),
      engdate: new FormControl(null),
      hebrewddate: new FormControl(null),
      upload: new FormControl(null)
    });
  }

  ngOnInit() {
    this.longTextDisabled.valueChanges.subscribe((isDisabled) => {
      if (!!isDisabled) {
        this.form.get('longText').disable();
      } else {
        this.form.get('longText').enable();
      }
    });
  }

  logEvent(event) {
    this.form.get('longText').setValue(`${new Date().toString()} ${event} event occured \r\n${this.form.value.longText}`);
  }

  onChecked(isChecked: boolean) {
    this.form.get('checkbox').setValue(!!isChecked);
  }

  onUploadSelected(file) {
    this.uploadStatus = `File selected: ${file.name} (${file.size})`
  }

  onUploadProgress(progress) {
    this.uploadStatus = `Upload progress: ${progress.loaded} of ${progress.total}`;
  }

  onUploadResponse(response) {
    this.uploadStatus = `Upload complete. File path: ${response.file_path} (${response.file_origin_name})`;
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
