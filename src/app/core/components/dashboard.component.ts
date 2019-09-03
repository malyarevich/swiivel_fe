import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      short: new FormControl('short text'),
      dropdown: new FormControl([])
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(`Value changed`, value);
    });
  }

}
