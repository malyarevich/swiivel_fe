import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '@models/data-collection/field.model';

@Component({
  selector: 'sw-time-field',
  templateUrl: './time-field.component.html',
  styleUrls: ['./time-field.component.scss']
})
export class TimeFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}

  getLabel(): string {
    return this.field.options.hideLabel ? '' : this.field.name;
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
