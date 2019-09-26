import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/models/data-collection/field.model';

@Component({
  selector: 'app-number-text-field',
  templateUrl: './number-text-field.component.html',
  styleUrls: ['./number-text-field.component.scss']
})
export class NumberTextFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}
}
