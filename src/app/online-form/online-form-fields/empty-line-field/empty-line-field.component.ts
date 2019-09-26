import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/models/data-collection/field.model';

@Component({
  selector: 'app-empty-line-field',
  templateUrl: './empty-line-field.component.html',
  styleUrls: ['./empty-line-field.component.scss']
})
export class EmptyLineFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}
}
