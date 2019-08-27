import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldService } from '@core/field.service';
import fields from '@app/shared/fields';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  form: FormGroup;
  fields = fields;
  constructor(
    private fs: FieldService
  ) {
    this.form = this.fs.toForm(fields);
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(`Value changed`, value);
    });
  }

}
