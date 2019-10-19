import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/models/data-collection/field.model';

@Component({
  selector: 'app-hebrew-date-field',
  templateUrl: './hebrew-date-field.component.html',
  styleUrls: ['./hebrew-date-field.component.scss']
})
export class HebrewDateFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}

  getSeparator(): string {
    const title =
      this.field.options.separator &&
      this.field.options.separator[0] &&
      this.field.options.separator[0].value
        ? this.field.options.separator[0].value
        : 'dash';

    switch (title) {
      case 'dash':
        return '-';
        break;
      case 'backslash':
        return '/';
        break;
      case 'dot':
        return '.';
        break;

      default:
        return '/';
        break;
    }
  }

  getFormat(): string {
    return this.field.options.dateFormat &&
      this.field.options.dateFormat[0] &&
      this.field.options.dateFormat[0].value
      ? this.field.options.dateFormat[0].value
      : 'mm-dd-yyyy';
  }

  getValue(): string {
    return this.fg.value[this.field._id];
  }

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
