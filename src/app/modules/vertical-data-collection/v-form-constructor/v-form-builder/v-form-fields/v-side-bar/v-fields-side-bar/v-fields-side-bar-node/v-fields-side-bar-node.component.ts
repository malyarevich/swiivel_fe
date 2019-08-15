import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../../../../model/field.model';
import {SideBarService} from '../../side-bar.service';

@Component({
  selector: 'app-v-fields-side-bar-node',
  templateUrl: './v-fields-side-bar-node.component.html',
  styleUrls: ['./v-fields-side-bar-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VFieldsSideBarNodeComponent implements OnInit {

  @Input() sideBar: Field[];

  constructor(
    private sideBarService: SideBarService
  ) {}

  ngOnInit() {
  }

  nodeAction(node: Field) {
    if (node.type !== 114) {
      return;
    }
    this.sideBarService.sectionSubject.next(node);
  }

}
