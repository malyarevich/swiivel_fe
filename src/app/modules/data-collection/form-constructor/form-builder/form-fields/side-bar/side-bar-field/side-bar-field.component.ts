import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Field } from 'src/app/models/data-collection/field.model';
import { SideBarService } from '../side-bar.service';

@Component({
  selector: 'app-side-bar-field',
  templateUrl: './side-bar-field.component.html',
  styleUrls: ['./side-bar-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SideBarFieldComponent implements OnInit {

  @Input() field: Field;
  @Input() group: Field[];
  @Input() form: Field[];
  @Input() nestedLevel: number;
  @Input() style: boolean;

  constructor(
    private sideBarService: SideBarService
  ) {}

  ngOnInit() {
  }

  deleteCustomField() {
    const index = this.group.findIndex(field => field.name === this.field.name);
    this.group.splice(index, 1);
  }

}

