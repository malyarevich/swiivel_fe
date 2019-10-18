import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/models/data-collection/field.model';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})
export class CheckboxFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}
}
