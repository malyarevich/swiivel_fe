import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../../../../model/field.model';
import {SideBarService} from '../../side-bar.service';

@Component({
  selector: 'app-fields-side-bar-node',
  templateUrl: './fields-side-bar-node.component.html',
  styleUrls: ['./fields-side-bar-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FieldsSideBarNodeComponent implements OnInit {

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
