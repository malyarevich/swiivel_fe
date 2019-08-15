import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {SideBarService} from '../side-bar.service';

@Component({
  selector: 'app-v-side-bar-group',
  templateUrl: './v-side-bar-group.component.html',
  styleUrls: ['./v-side-bar-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VSideBarGroupComponent implements OnInit {

  @Input() group: any;
  @Input() form: any;
  @Input() nestedLevel: number;
  @Input() idSectionForDragDrop: string[];

  public showNested = true;

  constructor(
    private sideBarService: SideBarService
  ) {}

  ngOnInit() {
  }

  getForm() {
    const index = this.form.findIndex(field => field.name === this.group.name);
    if (!this.form[index]) {
      return [];
    } else {
      return  this.form[index].fields;
    }
  }

}
