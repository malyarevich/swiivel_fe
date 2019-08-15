import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../../../model/field.model';
import {SideBarService} from '../side-bar.service';

@Component({
  selector: 'app-v-side-bar-field',
  templateUrl: './v-side-bar-field.component.html',
  styleUrls: ['./v-side-bar-field.component.css']
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
    if (this.nestedLevel === 2) {
      this.form = this.form.find(form => form.type === 113).fields;
    }
  }

}

