import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FieldService } from '@core/field.service';
import fields from '@app/shared/fields';
import * as vs from '../validators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  form: FormGroup;
  fields = fields;
  testForm: FormGroup;
  constructor(
    private fs: FieldService,
    private fb: FormBuilder
  ) {
    this.testForm = this.fb.group({
      email: ['', [vs.minValueValidator(1)]],
    })
    this.testForm.valueChanges.subscribe(v => {
      console.log(this.testForm);
    })
    this.form = this.fs.toForm(fields);
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(`Value changed`, value);
    });
  }

}
