import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldService } from '@core/field.service';
import fields from '@app/shared/fields';


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
  }
  longTextDisabled = new FormControl(false);
  form: FormGroup;
  fields;

  constructor(
    private fb: FormBuilder,
    private fs: FieldService
  ) {
    this.form = this.fb.group({
      short: new FormControl('short text'),
      toggle: new FormControl(true),
      checkbox: new FormControl(true),
      longText: new FormControl('Long text\n wrew'),
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
    this.longTextDisabled.valueChanges.subscribe((isDisabled) => {
      if (!!isDisabled) {
        this.form.get('longText').disable();
      } else {
        this.form.get('longText').enable();
      }
    });
    this.form.valueChanges.subscribe((value) => {
      console.log(`Value changed`, value);
    });
  }

  changeTextarea(size = false) {
    if (size) {
      this.textarea.rows = 10;
      this.textarea.cols = 50;
    } else {
      this.form.get('longText').setValue('Changed long text\nmultiline')
    }
  }

}
