import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../../../model/field.model';
import {SideBarService} from '../side-bar.service';

@Component({
  selector: 'app-v-side-bar-field',
  templateUrl: './v-side-bar-field.component.html',
  styleUrls: ['./v-side-bar-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VSideBarFieldComponent implements OnInit {

  @Input() field: Field;
  @Input() group: any;
  @Input() form: any;
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

