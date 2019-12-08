import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '@models/data-collection/field.model';

@Component({
  selector: 'sw-long-text-field',
  templateUrl: './long-text-field.component.html',
  styleUrls: ['./long-text-field.component.scss']
})
export class LongTextFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}

  getLabel(): string {
    return this.field.options && this.field.options.hideLabel
      ? ''
      : this.field.name;
  }

  getRows(): number | string {
    return this.field.options && this.field.options.rows
      ? this.field.options.rows
      : 2;
  }

  getCols(): number | string {
    return this.field.options && this.field.options.cols
      ? this.field.options.cols
      : 10;
  }

  isActive(): boolean {
    return (
      // !(this.field.options && this.field.options.readonly) &&
      this.fg.controls[this.field._id].enabled
    );
  }

  isRequired(): boolean {
    return this.field.options.required; // && !this.field.options.readonly;
  }
}
