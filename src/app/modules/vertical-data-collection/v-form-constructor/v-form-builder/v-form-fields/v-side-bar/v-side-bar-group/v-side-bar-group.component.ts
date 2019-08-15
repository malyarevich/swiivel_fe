import {Component, Input, OnInit} from '@angular/core';
import {SideBarService} from '../side-bar.service';

@Component({
  selector: 'app-v-side-bar-group',
  templateUrl: './v-side-bar-group.component.html',
  styleUrls: ['./v-side-bar-group.component.scss']
})

export class VSideBarGroupComponent implements OnInit {

  @Input() group: any;
  @Input() form: any;
  @Input() parentFormIndex: number;
  @Input() nestedLevel: number;
  @Input() idSectionForDragDrop: string[];

  public showNested = true;

  constructor(
    private sideBarService: SideBarService
  ) {}

  ngOnInit(): void {
  }

}
