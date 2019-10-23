import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Form } from '@app/models/data-collection/form.model';
import { customTable } from '../../models/custom-table.model';

@Component({
  selector: 'sw-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() form: Form;
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
