import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Form } from '@app/models/data-collection/form.model';

@Component({
  selector: 'sw-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() form: Form;
  @Input() fg: FormGroup;
  tableTitle = 'Favorite subjects';

  table = {
    header: ['Mathematic', 'Art', 'Music', 'Leadership', 'Woodshop'],
    body: [
      {
        label: 'Charlotte Wheeler',
        items: [
          {
            _id: 'custom_table__A1'
          },
          {
            _id: 'custom_table__A2'
          },
          {
            _id: 'custom_table__A3'
          },
          {
            _id: 'custom_table__A4'
          },
          {
            _id: 'custom_table__A5'
          }
        ]
      },

      {
        label: 'Jerome Wheeler',
        items: [
          {
            _id: 'custom_table__B1'
          },
          {
            _id: 'custom_table__B2'
          },
          {
            _id: 'custom_table__B3'
          },
          {
            _id: 'custom_table__B4'
          },
          {
            _id: 'custom_table__B5'
          }
        ]
      },

      {
        label: 'Floyd Wheeler',
        items: [
          {
            _id: 'custom_table__C1'
          },
          {
            _id: 'custom_table__C2'
          },
          {
            _id: 'custom_table__C3'
          },
          {
            _id: 'custom_table__C4'
          },
          {
            _id: 'custom_table__C5'
          }
        ]
      }
    ]
  };

  requiredValidator = Validators.compose([Validators.required]);

  constructor() {}

  addControls(body) {
    body.forEach(row => {
      row.items.forEach(field => {
        this.addControl(field._id);
      });
    });
  }

  addControl(
    key: string,
    isValidate: boolean = false,
    validators = this.requiredValidator
  ): void {
    this.fg.addControl(
      key,
      new FormControl(
        {
          value:
            this.form.fieldsData && this.form.fieldsData[key]
              ? this.form.fieldsData[key]
              : '',
          disabled: false
        },
        isValidate ? validators : null
      )
    );
  }

  ngOnInit() {
    this.addControls(this.table.body);
  }

  isError(i: number): boolean {
    // TODO: rewrite after BE check it
    return i === 1;
  }
}
