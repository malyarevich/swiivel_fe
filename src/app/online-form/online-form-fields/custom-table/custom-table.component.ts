import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormModel } from '@models/data-collection/form.model';
import { customTable } from '../../models/custom-table.model';

@Component({
  selector: 'sw-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() form: FormModel;
  @Input() fg: FormGroup;
  tableTitle = 'Favorite subjects';
  table = customTable;

  constructor() {}

  ngOnInit() {}

  // TODO: check if field is editable
  isActive(field): boolean {
    return (
      !(field.options && field.options.readonly) &&
      this.fg.controls[field._id].enabled
    );
  }

  isError(i: number): boolean {
    // TODO: rewrite after BE check it
    return i === 1;
  }
}
