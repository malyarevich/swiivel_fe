import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldService } from '@core/field.service';
import fields from '@app/shared/fields';


const TEST_FIELD_SERVICE = true;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

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
      console.log(`Value changed`, value);
    });
  }

}
