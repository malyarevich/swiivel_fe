import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldService } from '@core/field.service';
import fields from '@app/shared/fields';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      short: new FormControl('short text'),
      toggle: new FormControl(true),
      checkbox: new FormControl(true),
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(`Value changed`, value);
    });
  }

}
