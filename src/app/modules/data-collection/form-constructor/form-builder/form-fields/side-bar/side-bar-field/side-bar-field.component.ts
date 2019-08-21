import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from 'src/app/models/data-collection/field.model';

@Component({
  selector: 'app-side-bar-field',
  templateUrl: './side-bar-field.component.html',
  styleUrls: ['./side-bar-field.component.css']
})

export class SideBarFieldComponent implements OnInit {

  @Input() field: Field;
  @Input() group: Field[];
  @Input() nestedLevel: number;
  @Input() style: boolean;

  @Output() fieldToggle: EventEmitter<void> = new EventEmitter<void>();

  constructor(
  ) {}

  ngOnInit() {
  }

  onFieldToggle() {
    this.fieldToggle.emit();
  }

  deleteCustomField() {
    const index = this.group.findIndex(field => field.name === this.field.name);
    this.group.splice(index, 1);
  }

}

